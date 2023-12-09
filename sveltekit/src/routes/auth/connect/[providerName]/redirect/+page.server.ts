import { redirect } from '@sveltejs/kit';
import { PUBLIC_COOKIE_AGE, PUBLIC_STRAPI_URL } from '$env/static/public';
import type { PageServerLoad } from './$types';
const redirectAfterSuccessfulAuthentication = "/auth/authenticated"

export const load: PageServerLoad = async (event) => {
    const callbackUrl = `${PUBLIC_STRAPI_URL}/api/auth/${event.params.providerName}/callback${event.url.search}`;

    let data: any; //Request's body
    try {
        const response = await fetch(callbackUrl);
        if (response.status !== 200) {
            data = await response.json();
            throw new Error(`Couldn't login to Strapi. Status: ${response.status}\nJSON BODY: ${JSON.stringify(data)}`);
        }
        data = await response.json();
    } catch (err) {
        //Not Authenticated Schenario
        console.error("AUTHENTICATION ERROR:" + err);
        // console.log({ data })
        let errorMessage: string = data?.error?.name && data?.error?.status && data?.error?.message ? `${data?.error?.status} ${data?.error?.name}\nAn error occurred during authentication:${data?.error?.message}\n Please try again.` :
            "An error occured during authentication"
        return {
            errorMessage: errorMessage
        }
    }
    //Authenticated Case
    event.cookies.set("jwt", data.jwt, {
        path: "/",
        maxAge: Number(PUBLIC_COOKIE_AGE)
    })
    throw redirect(303, redirectAfterSuccessfulAuthentication)
};
