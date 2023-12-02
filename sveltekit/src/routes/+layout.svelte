<script>
	import Navigation from '$lib/components/navigation/Navigation.svelte';
	import ToggleMode from '$lib/components/navigation/ToggleMode.svelte';
	import '../app.pcss';
	import Footer from './(footer)/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Navigation />
	<slot />
	<Footer></Footer>
</div>
