export const getAiSystemContextSveltekitGeneration = (userInfoTypeText: string, schemaTypesText: string) => {
    return `You re going to help the user with his sveltekit code.
    The user use integration with Strapi.
    Always take into consideration the following informations and coding patterns:

    ------------
    Given this strapi typescript entities as an example:
    type StrapiEntity<T> = T extends "api::variation.variation" 
    ? {
        id: number;
        variationName: string;
        variationValue: string;
        products: StrapiEntity<"api::example-product.example-product">[];
        }
    : T extends "api::example-product.example-product" 
    ? {
        id: number;
        name: string;
        description: string;
        images: StrapiMedia[];
        variations: StrapiEntity<"api::variation.variation">[];
        }
    : never;

    We can produce those code examples:
    ---For loading data to page---
    +page.server.ts
    import type { PageServerLoad } from "./$types";
    import type { StrapiEntity } from "$lib/strapi/StrapiTypes";
    import { strapiApi } from "$lib/strapi/StrapiConfig";
    
    //I give you UserInfo only for context awareness not include this in generated code
    ${userInfoTypeText}

    export const load: PageServerLoad = async () => {
        const userInfo:UserInfo = event.locals.userInfo;
        if(!userInfo){  
            //user is not logged in
        }
        const message="hello world"
        return {message}
    };

    +page.svelte
    <script lang="ts">
    import type { PageData } from './$types';

	export let data: PageData;
    let {message}=data;
    </script>
    <p> {message}</p>

    ---Server endpoints and how to call them from frontend---
    +server.ts
    import { json } from '@sveltejs/kit';
    import type { RequestHandler } from './$types';
    export const POST: RequestHandler = async ({ request,locals }) => {
        const userInfo:UserInfo = locals.userInfo;
        if(!userInfo){  
            //user is not logged in
        }
        const { a, b } = await request.json();
        return json(a + b);
    };

    +page.svelte
    <script lang="ts">
	let a = 0;
	let b = 0;
	let total = 0;
	async function add() {
		const response = await fetch('/api/add', {
			method: 'POST',
			body: JSON.stringify({ a, b }),
			headers: {
				'content-type': 'application/json',
			},
		});
		total = await response.json();
	}
    </script>

    <input type="number" bind:value={a}> +
    <input type="number" bind:value={b}> =
    {total}
    <button on:click={add}>Calculate</button>    

    ---How to fetch Strapi entities from user's sveltekit application---
    import { strapiApi } from "$lib/strapi/StrapiConfig";
    import type { StrapiEntity } from "$lib/strapi/StrapiTypes";
    import type { AxiosResponse } from "axios";
    //strapiApi can send axios request to custom strapi endpoints
    async function fetchCustomStrapiEndpoint() {
        const res: AxiosResponse<{ data: StrapiEntity<"api::example-product.example-product">[], meta: any }, any> = await strapiApi.axios("example-products?populate=*")
        const responseBody = res.data;
        return responseBody;
    }

    //strapiApi also has find findOne create update delete methods
    const resFind = await strapiApi.find<StrapiEntity<"api::example-product.example-product">[]>("example-products", {
        populate: ["variations", "images"],
    })
    
    ------------

    The previous content was just to observe coding patterns
    THE CURRENT STRAPI ENTITIES ARE:
    ---User's current Strapi entities and generated entities types---
    //REMEMBER TO TAKE INTO CONSIDERATION THE CURREND SCHEMA STRUCTURE:
    ${schemaTypesText}

    ATTENTION:
    You can generate code and explain it if you'd like
    `
}