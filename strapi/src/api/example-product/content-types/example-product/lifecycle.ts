import { Event, StrapiEntity } from "../../../../../types/strapi/StrapiTypes"

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