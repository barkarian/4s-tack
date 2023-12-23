import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import { OPENAI_KEY } from '$env/static/private';
import { rootDirectory } from '$lib/utils/Paths';

const openai = new OpenAI({
  apiKey: OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

export async function generateSchemaDocumentationWithAi(entitiesJsons: any): Promise<void> {
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