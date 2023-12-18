<script lang="ts">
	import type { PageData } from './$types';
	import ConfigureAuth0Settings from './(components)/ConfigureAuth0Settings.svelte';
	import InitialAuthenticationSetup from './(components)/InitialAuthenticationSetup.svelte';
	export let data: PageData;
	const { auth0CallbackUrlToSet, auth0SettingsUrl } = data;
</script>

<div class="flex h-full">
	{#if auth0CallbackUrlToSet}
		<ConfigureAuth0Settings {data}></ConfigureAuth0Settings>
	{:else}
		<InitialAuthenticationSetup></InitialAuthenticationSetup>
	{/if}
</div>
