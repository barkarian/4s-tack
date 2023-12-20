import type { PageServerLoad, Actions } from "./$types";
import { superValidate } from "sveltekit-superforms/server";
import { formSchema } from "./schema";
import { strapiApi } from "$lib/strapi/StrapiConfig";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = () => {
    return {
        form: superValidate(formSchema)
    };
};

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, formSchema);
        if (!form.valid) {
            return fail(400, {
                form
            });
        }
        //Sign up to strapi
        let strapiRespone
        try {
            strapiRespone = await strapiApi.login({
                identifier: form.data.username,
                password: form.data.password
            })
            event.cookies.set("jwt", strapiRespone.jwt, {
                maxAge: 60 * 60
            });
        } catch (e) {
            console.error(e)
            throw (e)
        }
        return {
            form
        };
    }
};