import { getServerSideUserFromJwt } from '$lib/server/interfaces/strapi/utils/AuthUtils';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';


const setLocals: Handle = async ({ event, resolve }) => {
    // console.log({ msg: "HOOK:inside setLocals Element" })
    const jwt = event.cookies.get('jwt');
    //Get User Infos
    event.locals.userInfo = await getServerSideUserFromJwt(jwt)
    if (jwt && !event.locals.userInfo) {
        throw redirect(302, "/auth/logout")
    }
    //Get other important infos...
    //add your code here
    return resolve(event);
}

const userAuth: Handle = async ({ event, resolve }) => {

    console.log({ msg: "HOOK:inside userAuth Sequence Element", pathname: event.url.pathname, locals: event.locals })
    return resolve(event)
}

export const handle: Handle = sequence(setLocals, userAuth);

