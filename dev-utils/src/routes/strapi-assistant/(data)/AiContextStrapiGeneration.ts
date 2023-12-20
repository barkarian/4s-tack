export const getAiSystemContextSveltekitGeneration = (userInfoTypeText: string, schemaTypesText: string) => {
    return `You re going to help the user with his strapi typescript code.
    The user may want to create entities lifecycles,create custom webhooks etc.
    Always take into consideration the following informations and coding patterns:

    Given this strapi typescript entities as an example:
    type StrapiEntity<T> = T extends "api::variation.variation" 
    ? {
        id: number;
        variationName: string;
        variationValue: string;
        products: StrapiEntity<"api::example-product.example-product">[];
        }
    : T extends "api::example-product.example-product" 
    ? {
        id: number;
        name: string;
        description: string;
        images: StrapiMedia[];
        variations: StrapiEntity<"api::variation.variation">[];
        }
    : never;

    We can produce those code examples:
    ---CODE EXAMPLE FOR LIFECYCLES---
    import { Event, StrapiEntity } from "$root/types/StrapiTypes";

    //Example of how to use a lifecycle hook
    async function beforeUpdate(event: Event<"api::example-product.example-product">): Promise<void> {
        //entityForUpdate is not populated
        const entityForUpdate = event.params.data;
        //If you need to populate run this:
    
        //To modify a field you could do:
        entityForUpdate.name = entityForUpdate.name + " modified"
    
        //Get variations
        const allVariations = await strapi.entityService.findMany("api::variation.variation", {})
    
        //To add a relation between entities you can do this:
        const variationsIds = allVariations.map(variation => variation.id);
        //@ts-ignore
        entityForUpdate.variations.connect = variationsIds;
    }
    
    export default {
        beforeUpdate
    }
    
    ---CODE EXAMPLE FOR CRUD OPERATIONS USING STRAPI ENTITY SERVICE---
    //Example with all entity crud operations
    async function crudEntities() {
        const getEntitiesResponse = await strapi.entityService.findMany("api::example-product.example-product", {
            populate: {
                variations: {
                    populate: {
                        products: true
                    }
                },
                images: true
            },
            sort: {
                name: "asc"
            },
        })
        const entityOne: StrapiEntity<"api::example-product.example-product"> = getEntitiesResponse[0];
    
        const createResponse = await strapi.entityService.create("api::example-product.example-product", {
            data: {
                name: "new entity",
                variations: [1, 3]
                //...
            },
            populate: {
                variations: true
            }
        })
    
        const updateResponse = await strapi.entityService.update("api::example-product.example-product", 1, {
            data: {
                name: "new entity",
                //...
            },
            populate: {
                variations: true
            }
        })
    
        const deleteResponse = await strapi.entityService.delete("api::example-product.example-product", 1);
    }

    ------------

    The previous content was just to observe coding patterns
    THE CURRENT STRAPI ENTITIES ARE:
    ---User's current Strapi entities and generated entities types---
    //REMEMBER TO TAKE INTO CONSIDERATION THE CURREND SCHEMA STRUCTURE:
    ${schemaTypesText}

    ATTENTION:
    You can generate code and explain it if you'd like
    `
}