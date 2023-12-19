import { OPENAI_KEY } from "$env/static/private";
import type { RequestHandler } from "@sveltejs/kit";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
    apiKey: OPENAI_KEY
})
const openai = new OpenAIApi(config)

export const POST: RequestHandler = async ({ request }) => {
    const { messages } = await request.json();
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        stream: true,
        messages
    })
    const stream = OpenAIStream(response, {
        onCompletion: async (completion: string) => {
            console.log("Stream has been completed if you want save in database etc")
        }
    });
    return new StreamingTextResponse(stream);
}