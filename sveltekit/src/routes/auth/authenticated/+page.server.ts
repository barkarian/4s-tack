import type { UserStoreData } from "$lib/stores";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (event) => {
    const userServer = event.locals.userInfo;

    //Create user Store
    const userStoreData: UserStoreData = {
        email: "dasdasd",
        username: "dasdasd"
    }
    return {
        userStoreData
    }
};