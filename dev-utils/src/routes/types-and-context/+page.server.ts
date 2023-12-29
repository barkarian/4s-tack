import type { PageServerLoad } from "./$types";
import { copyStrapiTypesToFrontend } from "./api/strapi-types-to-sveltekit/(utils)/copyStrapiTypesToFrontend.server";

export const load: PageServerLoad = async () => {
    // Spin up tunnels
    const status = copyStrapiTypesToFrontend()
    console.log({ status })
    return { status };
};