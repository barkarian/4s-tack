import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { rootDirectory } from '$lib/utils/Paths';
import fs from 'fs';
import { generateSchemaDocumentationWithAi } from './(promptTemplates)/generateSchemaDocumentationWithAi.server';
import { createPromptVariableItemForTsArray, storeTypescriptInFile } from '$lib/utils/typescriptGen';


export const POST: RequestHandler = async ({ request }) => {
    let status = "ok"
    try {
        const entitiesJsons: string = await fetchEntitiesJsons();
        const openaiResponseMsg: string = await generateSchemaDocumentationWithAi(entitiesJsons);
        const strapiTypesDocs: string = createPromptVariableItemForTsArray("strapi_current_entities_types", openaiResponseMsg);
        const helloWorld: string = createPromptVariableItemForTsArray("helloWorld", "hello big world");
        const generatedTsCode: string = `
        export type AiContext = { key: string, context: string }
        
        export const aiContexts: AiContext[] =[
            ${[strapiTypesDocs, helloWorld].join(',\n')}
        ]`;
        storeTypescriptInFile(`${rootDirectory}/chatbot-ui/dev-utils/data/AiContextRetrieval`, generatedTsCode)
        //Create a typescript source code
    } catch (e) {
        status = "An error occured check at the dev-utils console"
    } finally {
        return json({ status });
    }
};


async function fetchEntitiesJsons(): Promise<string> {
    let entityDirectories: string[] = fs.readdirSync(`${rootDirectory}/strapi/src/api`);
    entityDirectories = entityDirectories.filter((directory) => !directory.startsWith('.'));
    const entitiesJsons: any[] = [];

    //Get all api entities jsons
    for (const entityDirectory of entityDirectories) {
        const schemaPath: string = `${rootDirectory}/strapi/src/api/${entityDirectory}/content-types/${entityDirectory}/schema.json`;
        const schemaJson: string = fs.readFileSync(schemaPath, 'utf8');
        const parsedJson: any = JSON.parse(schemaJson);

        entitiesJsons.push({
            typeName: `api::${entityDirectory}.${entityDirectory}`,
            parsedJson
        });
    }
    //Get user entity json
    const userSchemaPath: string = `${rootDirectory}/strapi/src/extensions/users-permissions/content-types/user/schema.json`;
    const userSchemaJson: string = fs.readFileSync(userSchemaPath, 'utf8');
    const parsedJson: any = JSON.parse(userSchemaJson);
    entitiesJsons.push({
        typeName: `plugin::users-permissions.permission`,
        parsedJson
    });
    console.log({ entitiesJsons })
    const entitiesJsonsText: string = entitiesJsons.map((json) => JSON.stringify(json)).join('\n');
    return entitiesJsonsText;
}