import type { PageServerLoad, Actions } from "./$types";
import { superValidate } from "sveltekit-superforms/server";
import { formSchema } from "./schema";

export const load: PageServerLoad = () => {
    return {
        form: superValidate(formSchema)
    };
};