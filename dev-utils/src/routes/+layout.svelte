<script>
	import '../app.pcss';
	import Footer from './(components)/footer/Footer.svelte';
	import { PUBLIC_PWA_BODY_VH } from '$env/static/public';
	import Navigation from './(components)/navigation/Navigation.svelte';
	import { page } from '$app/stores';
	import ToggleMode from './(components)/navigation/ToggleMode.svelte';
	$page.url.pathname === '/';
</script>

{#if $page.url.pathname === '/'}
	<ToggleMode></ToggleMode>
	<slot />
{:else}
	<div class="flex min-h-screen flex-col">
		<Navigation />
		<div style={PUBLIC_PWA_BODY_VH}>
			<slot />
		</div>
		<Footer></Footer>
	</div>
{/if}
