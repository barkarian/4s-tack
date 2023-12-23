import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import { OPENAI_KEY } from '$env/static/private';
import { rootDirectory } from '$lib/utils/Paths';

const openai = new OpenAI({
  apiKey: OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

export async function generateSchemaDocumentationWithAi(): Promise<void> {
  const entitiesJsons: string = await fetchEntitiesJsons();
  console.log({ entitiesJsons })
  const completion: any = await openai.chat.completions.create({
    messages: [
      {
        role: "system", content: `Given this example of how this entity json:
                  typeName: api::example-product.example-product,
                  json:{
                      "kind": "collectionType",
                      "collectionName": "example_products",
                      "info": {
                        "singularName": "example-product",
                        "pluralName": "example-products",
                        "displayName": "ExampleProduct",
                        "description": ""
                      },
                      "options": {
                        "draftAndPublish": true
                      },
                      "pluginOptions": {},
                      "attributes": {
                        "name": {
                          "type": "string"
                        },
                        "description": {
                          "type": "string"
                        },
                        "images": {
                          "type": "media",
                          "multiple": true,
                          "required": false,
                          "allowedTypes": [
                            "images",
                            "files",
                            "videos",
                            "audios"
                          ]
                        },
                        "variations": {
                          "type": "relation",
                          "relation": "manyToMany",
                          "target": "api::variation.variation",
                          "inversedBy": "products"
                        }
                      }
                    }
                    
                   This entity type will automatically generate the following type:
                   type StrapiEntity<T> = T extends "api::example-product.example-product"
                   ? {
                       id: number;
                       name: string;
                       description: string;
                       images: Media[];
                       variations: StrapiEntity<"api::variation.variation">[];
                       ownerOfTheProduct: StrapiEntity<"plugin::users-permissions.user">;
                     }
                   : T extends "api::variation.variation" 
                   ? {
                       // Define the structure for variation here
                     }
                   : never;

                   // if you don't know a type, assign it to any
                   type Media=any;
                  ---
                  Here is a list of typeNames and their respective jsons...Following the pattern above transform the following array into the corresponding StrapiEntity<T> (where T should extend every typeName of the array):
                  ${entitiesJsons}

                  ATTENTION:
                  Do not generate examples just the type definition.
                  `},
      { role: 'user', content: entitiesJsons }],
    model: 'gpt-3.5-turbo',
  });
  if (completion.choices && completion.choices.length > 0) {
    fs.writeFileSync(path.resolve(rootDirectory, './dev-utils/entitiesRelationDocs.txt'), completion.choices[0].message.content);
    console.log('AI have generate entities relation docs! The AI will fetch it for your frontend and backend applications');
  } else {
    console.log('No choices returned from the OpenAI API');
  }
}

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