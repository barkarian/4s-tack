<script>
	import Navigation from './(components)/navigation/Navigation.svelte';
	import ToggleMode from './(components)/navigation/ToggleMode.svelte';
	import '../app.pcss';
	import Footer from './(components)/footer/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Navigation />
	<slot />
	<Footer></Footer>
</div>
