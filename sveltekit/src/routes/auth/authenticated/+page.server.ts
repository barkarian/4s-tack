import type { UserStoreData } from "$lib/stores";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (event) => {
    const userServer = event.locals.userInfo;
    if (!userServer) throw redirect(302, "/")

    let userStoreData: UserStoreData | undefined = undefined
    if (userServer) {
        //Create user Store
        userStoreData = {
            email: userServer?.email ?? "",
            username: userServer?.username ?? ""
        }
    }

    return {
        userStoreData
    }
};