import type { UserStoreData } from "$lib/stores";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = (event) => {
    event.locals.userInfo = undefined;
    event.cookies.delete("jwt", {
        path: "/"
    })
};