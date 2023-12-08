import { json, type RequestHandler } from '@sveltejs/kit';
import { PUBLIC_STRAPI_URL } from '$env/static/public';
const redirectAfterSuccessfulAuthentication = "/auth/authenticated"

export const GET: RequestHandler = async (event) => {
    const providerName = event.params.providerName;
    const callbackUrl = `${PUBLIC_STRAPI_URL}/api/auth/${providerName}/callback${event.url.search}`;
    // console.log({ providerName, callbackUrl, search: event.url.search })

    try {
        const response = await fetch(callbackUrl);
        if (response.status !== 200) {
            const data = await response.json();
            throw new Error(`Couldn't login to Strapi. Status: ${response.status}\nJSON BODY: ${JSON.stringify(data)}`);
        }
        const data = await response.json();
        event.cookies.set("jwt", data.jwt, {
            path: "/",
            maxAge: 60 * 60
        })
        console.log("hhhhehtwtewt")
        return json(
            { message: 'Login successful' },
            {
                headers: { 'Location': redirectAfterSuccessfulAuthentication, 'x-custom-header': 'potato' },
                status: 303
            }
        );
    } catch (err) {
        console.error(err);

        return json(
            { message: 'An error occurred during login. Please try again.' },
            {
                status: 500
            }
        );
    }
};
