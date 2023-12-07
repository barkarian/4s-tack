// See https://kit.svelte.dev/docs/types#app

import type { StrapiFlattenEntity } from "$lib/server/interfaces/strapi/types";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			userInfo: StrapiFlattenEntity<"plugin::users-permissions.user"> | undefined
		}
		// interface PageData {}
		// interface Platform {}
	}
}

type UserInfo = {
	userId: string
}
export { };
