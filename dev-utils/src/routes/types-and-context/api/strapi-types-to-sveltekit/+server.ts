import { json } from '@sveltejs/kit';
import { copyStrapiTypesToFrontend } from "../../(utils)/copyStrapiTypesToFrontend.server";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {
    const status = copyStrapiTypesToFrontend()

    return json({ status });
};