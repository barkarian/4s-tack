import { strapiApi } from "$lib/components/strapi/StrapiConfig";
import type { AxiosResponse } from "axios";
import type { StrapiEntity } from "$lib/server/interfaces/strapi/utils/types";
import type { PageServerLoad } from "./$types";
//STRAPI FETCH FUNCTION EXAMPLE
async function fetchCustomStrapiEndpoint() {
    const res: AxiosResponse<{ data: StrapiEntity<"api::example-product.example-product">[], meta: any }, any> = await strapiApi.axios(`example-products?populate=*`)
    const responseBody = res.data;
    return responseBody;
}

async function findExampleProductsExample() {
    const res = await strapiApi.find<StrapiEntity<"api::example-product.example-product">[]>("example-products", {
        populate: ["variations", "images"],
    })
    //Contains strapi res body:
    //res.data
    //res.meta
    return res;
}

export const load: PageServerLoad = async () => {
    const strapiRes = await findExampleProductsExample()
    const strapiCustomEndpoint = await fetchCustomStrapiEndpoint()
    return {
        strapiRes,
        strapiCustomEndpoint
    };
};