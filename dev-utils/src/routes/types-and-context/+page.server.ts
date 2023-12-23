import type { PageServerLoad } from "./$types";
import { copyStrapiTypesToFrontend } from "./(utils)/copyStrapiTypesToFrontend.server";

export const load: PageServerLoad = async () => {
    // Spin up tunnels
    const status = copyStrapiTypesToFrontend()
    console.log({ status })
    return { status };
};