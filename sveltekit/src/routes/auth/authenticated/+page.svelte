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

<p>-jwt cookie has been set.</p>
<p>-userStoreData and its corresponding localStorage has been set</p>
<p>
	userStoreData:{JSON.stringify($userStore)}
</p>
<p>Modify UserStore object and other from: /auth/authenticated/+page.server.ts</p>
