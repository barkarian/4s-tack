import { rootDirectory } from "$lib/utils/Paths";
import type { PageServerLoad } from "./$types";
import { getAiSystemContextSveltekitGeneration } from "./(promptTemplates)/AiContextSveltekitGeneration";
import fs from 'fs';


export const load: PageServerLoad = () => {
    //SVELTEKIT SYSTEM CONTENT:
    //Get entities relation docs
    const entitiesRelationDocsPath = `${rootDirectory}/dev-utils/entitiesRelationDocs.txt`;
    let schemaTypesText = fs.readFileSync(entitiesRelationDocsPath, 'utf8')
    //Get user info type
    const userInfoTypePath = `${rootDirectory}/sveltekit/src/app.d.ts`;
    const appDtsCodeToText = fs.readFileSync(userInfoTypePath, 'utf8')
    //Find and get type UserInfo as a text from app.d.ts
    const userInfoTypeText = appDtsCodeToText.match(/type UserInfo = {([\s\S]*?)}/)![0]
    console.log({ userInfoTypeText })
    const sveltekitSystemContent = getAiSystemContextSveltekitGeneration(userInfoTypeText, schemaTypesText)
    console.log(schemaTypesText, userInfoTypeText)

    //STRAPI SYSTEM CONTENT:
    return { sveltekitSystemContent }
};