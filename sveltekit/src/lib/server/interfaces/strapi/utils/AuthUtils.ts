import { strapiApi } from "$lib/components/strapi/StrapiConfig";
import type { StrapiFlattenEntity } from "../types";

export async function getServerSideUserFromJwt(jwt: string | undefined): Promise<StrapiFlattenEntity<"plugin::users-permissions.user"> | undefined> {
    if (!jwt) return undefined
    try {
        const userInfoResponse = await strapiApi.axios({
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`
            },
            url: "users/me"
        });
        const userInfo: StrapiFlattenEntity<"plugin::users-permissions.user"> = userInfoResponse.data
        return userInfo
    } catch (e) {
        console.error(e)
        throw e
    }
}

export async function getFrontEndUserFromJwt(jwt: string | undefined): Promise<StrapiFlattenEntity<"plugin::users-permissions.user"> | undefined> {
    if (!jwt) return undefined
    try {
        const userInfoResponse = await strapiApi.axios({
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`
            },
            url: "users/me"
        });
        const userInfo: StrapiFlattenEntity<"plugin::users-permissions.user"> = userInfoResponse.data
        return userInfo
    } catch (e) {
        console.error(e)
        throw e
    }
}