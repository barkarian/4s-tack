// import { Event } from '@strapi/database/lib/lifecycles';

async function afterUpdate(event): Promise<void> {
    console.log("after property update");
    const updatedProperty = await strapi.entityService.findOne("api::example-product.example-product", event.params.data.id);
}

export default {
    afterUpdate
};