import { strapiApi } from '$lib/components/strapi/StrapiConfig';
import type { StrapiFlattenEntity } from '$lib/server/interfaces/strapi/types';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';


const setLocals: Handle = async ({ event, resolve }) => {
    console.log({ msg: "HOOK:inside setLocals Element" })
    const jwt = event.cookies.get('strapi_jwt');
    //Get User Infos
    if (!jwt) {
        event.locals.userInfo = undefined
    } else {
        const userInfoResponse = await strapiApi.axios({
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`
            },
            url: "users/me"
        });
        event.locals.userInfo = userInfoResponse.data;
    }
    //Get other important infos...
    //add your code here
    return resolve(event);
}

const userAuth: Handle = async ({ event, resolve }) => {
    console.log({ msg: "HOOK:inside userAuth Sequence Element", locals: event.locals })
    return resolve(event)
}

export const handle: Handle = sequence(setLocals, userAuth);

