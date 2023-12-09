import type { PageServerLoad, Actions } from "./$types";
import { superValidate } from "sveltekit-superforms/server";
import { formSchema } from "./schema";
import { fail } from "@sveltejs/kit";
import { strapiApi } from "$lib/components/strapi/StrapiConfig";
import { getFrontEndUserFromJwt, getServerSideUserFromJwt } from "../../../auth/(components)/AuthUtils.server";

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
        let strapiRespone;
        try {
            strapiRespone = await strapiApi.register({
                email: form.data.email,
                password: form.data.password,
                username: form.data.username
            })
        } catch (e) {
            console.error(e)
            throw (e)
        }
        event.cookies.set("jwt", strapiRespone.jwt, {
            maxAge: 60 * 60
        })
        return {
            form
        };
    }
};