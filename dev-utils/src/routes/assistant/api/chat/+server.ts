import { OPENAI_KEY } from "$env/static/private";
import type { RequestHandler } from "@sveltejs/kit";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";
import { getAiSystemContextSveltekitGeneration } from "../../(data)/AiContextSveltekitGeneration";
import { rootDirectory } from "$lib/utils/Paths";
import fs from 'fs';

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
            //Get entities relation docs
            const entitiesRelationDocsPath = `${rootDirectory}/dev-utils/entitiesRelationDocs.txt`;
            let schemaTypesText = fs.readFileSync(entitiesRelationDocsPath, 'utf8')
            console.log({ schemaTypesText })
            //Get user info type
            const userInfoTypePath = `${rootDirectory}/sveltekit/src/app.d.ts`;
            const appDtsCodeToText = fs.readFileSync(userInfoTypePath, 'utf8')
            //Find and get type UserInfo as a text from app.d.ts
            const userInfoTypeText = appDtsCodeToText.match(/type UserInfo = {([\s\S]*?)}/)![0]
            console.log({ userInfoTypeText })
            const systemContent = getAiSystemContextSveltekitGeneration(userInfoTypeText, schemaTypesText)
            console.log({ systemContent })
        }
    });
    return new StreamingTextResponse(stream);
}