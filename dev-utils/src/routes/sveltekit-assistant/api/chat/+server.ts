import { OPENAI_KEY } from "$env/static/private";
import type { RequestHandler } from "@sveltejs/kit";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";
import { getAiSystemContextSveltekitGeneration } from "../../(promptTemplates)/AiContextSveltekitGeneration";
import { rootDirectory } from "$lib/utils/Paths";
import fs from 'fs';

const config = new Configuration({
    apiKey: OPENAI_KEY
})
const openai = new OpenAIApi(config)

export const POST: RequestHandler = async ({ request }) => {
    const { messages } = await request.json();
    messages[messages.length - 1].content = messages[messages.length - 1].content
    // + "(the code blocks should be contained inside those SPECIAL MARKERS:<<<code>>>THE CODE YOU WROTE<<<end_code>>>)"
    console.log({ messages })

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        stream: true,
        messages
    })
    const stream = OpenAIStream(response, {
        onCompletion: async (completion: string) => {
            console.log({ completion })
        }
    });
    return new StreamingTextResponse(stream);
}