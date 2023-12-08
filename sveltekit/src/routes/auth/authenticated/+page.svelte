<script lang="ts">
	import { userStore } from '$lib/stores';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log({ data });

	$userStore = data.userStoreData;
	onMount(() => {
		// Store the value in local storage when the component mounts
		localStorage.setItem('userStoreData', JSON.stringify($userStore));
	});
</script>

<p>
	The UserStore value has just be set to the value:{JSON.stringify($userStore)}
</p>
<p>Add more or less properties to it by modifying /auth/authenticated/+page.server.ts</p>
<p>
	You can also modify *UserStoreData Type* that you will see there(and is located inside
	$lib/stores.ts)
</p>
