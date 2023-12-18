import OpenAI from 'openai';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
dotenv.config();
const __dirname = dirname(fileURLToPath(import.meta.url));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

async function generateEntitiesDocs() {
  const entitiesJsons = await fetchEntitiesJsons();
  console.log({ entitiesJsons })
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system", content: `Given this example of how this entity json:
            {
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
             type StrapiEntity<T> = T extends "api::variation.variation" 
             ? {
                 id: number;
                 variationName: string;
                 variationValue: string;
                 products: StrapiEntity<"api::example-product.example-product">[];
               }
             : T extends "api::example-product.example-product" 
             ? {
                 // Define the structure for example-product here
               }
             : never;
         
            
            ---
            Given this example transforms all of the jsons entities that the user will give you into typescript types like the example above: 
            `},
      { role: 'user', content: entitiesJsons }],
    model: 'gpt-3.5-turbo',
  });
  // Check if completion.choices is not empty
  if (completion.choices && completion.choices.length > 0) {
    // Write down in ../entitiesRelationDocs.txt the completion.choices
    fs.writeFileSync(path.resolve(__dirname, '../entitiesRelationDocs.txt'), completion.choices[0].message.content);
    console.log('AI have generate entities relation docs! The AI will fetch it for your frontend and backend applications');
  } else {
    console.log('No choices returned from the OpenAI API');
  }
}

async function fetchEntitiesJsons() {
  let entityDirectories = fs.readdirSync('../strapi/src/api');
  //Only keep directories that do not start with a dot
  entityDirectories = entityDirectories.filter((directory) => !directory.startsWith('.'));
  const entitiesJsons = [];

  for (const entityDirectory of entityDirectories) {
    const schemaPath = `../strapi/src/api/${entityDirectory}/content-types/${entityDirectory}/schema.json`;
    const schemaJson = fs.readFileSync(path.resolve(__dirname, schemaPath), 'utf8');
    const parsedJson = JSON.parse(schemaJson);

    entitiesJsons.push(parsedJson);
  }
  // console.log({ entitiesJsons })
  //Turn entities json into text and between each entity json add a new line
  const entitiesJsonsText = entitiesJsons.map((json) => JSON.stringify(json)).join('\n');
  // console.log({ entitiesJsonsText })
  return entitiesJsonsText;
}

generateEntitiesDocs();
