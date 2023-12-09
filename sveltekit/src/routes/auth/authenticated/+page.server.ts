import type { UserStoreData } from "$lib/stores";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (event) => {
    const userServer = event.locals.userInfo;

    //Create user Store
    const userStoreData: UserStoreData = {
        email: userServer?.email ?? "",
        username: userServer?.username ?? ""
    }

    return {
        userStoreData
    }
};