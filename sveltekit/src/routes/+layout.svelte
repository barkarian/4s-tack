<script>
	import Navigation from './(components)/navigation/Navigation.svelte';
	import '../app.pcss';
	import Footer from './(components)/footer/Footer.svelte';
	import { PUBLIC_PWA_BODY_VH } from '$env/static/public';
	import { onMount } from 'svelte';
	import { userStore } from '$lib/stores';
	let isMounted = false;
	//ON HOT REFRESHES
	onMount(() => {
		// Check if localStorage is available and userStoreData exists
		if (typeof window !== 'undefined') {
			console.log('HOT REFRESH -LOAD FROM LOCAL STORAGE');
			const storedData = localStorage.getItem('userStoreData');
			if (storedData) {
				// Parse the JSON object and update the userStore
				$userStore = JSON.parse(storedData);
			}
		}
		isMounted = true;
	});
</script>

<div class="flex flex-col min-h-screen">
	{#if isMounted}
		<Navigation />
		<div style={PUBLIC_PWA_BODY_VH}>
			<slot />
		</div>
		<Footer></Footer>
	{/if}
</div>
