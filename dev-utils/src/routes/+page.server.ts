import { startNgrok } from "../startNgrok.server";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    // Spin up tunnels
    const {
        auth0SettingsUrl,
        auth0CallbackUrlToSet,
    } = await startNgrok()
    return { auth0SettingsUrl, auth0CallbackUrlToSet };
};