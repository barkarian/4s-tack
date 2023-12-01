import type { StrapiFlattenEntity, StrapiNestedEntity } from "../lib/server/interfaces/strapi/types";

async function fetchStrapiFlattenEntityExample() {
    const res = await fetch("http://localhost:1337/api/users-with-flat-response")
    const flattenData = await res.json() as StrapiFlattenEntity<"plugin::users-permissions.user">
    //Example of how the data is structured on a flat response
    //Not defaults you have to create those endpoints ⏳
    //Simpler to use,very good for nested data ✅
    flattenData.role?.users?.every(e => e.email);
    return flattenData;
}

async function fetchStrapiNestedntityExample() {
    const res = await fetch("http://localhost:1337/api/users-with-nested-response")
    const nestedData = await res.json() as StrapiNestedEntity<"plugin::users-permissions.user">
    //Example of how the data is structured on a Nested response
    //The default strapi CRUD response 💨
    //For nested data ComplexEntity are NOT ideals ❌
    nestedData.attributes.role;
    return nestedData
}

export const load = async () => {
    // const data = useLoader
    // // Server API:
    // const form = await superValidate(schema);

    // // Unless you throw, always return { form } in load and form actions.
    // return { form };
};
