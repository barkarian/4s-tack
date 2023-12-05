<script>
	import Navigation from './(components)/navigation/Navigation.svelte';
	import '../app.pcss';
	import Footer from './(components)/footer/Footer.svelte';
	import { PUBLIC_PWA_BODY_VH } from '$env/static/public';
</script>

<div class="flex flex-col min-h-screen">
	<Navigation />
	<div style={PUBLIC_PWA_BODY_VH}>
		<slot />
	</div>
	<Footer></Footer>
</div>
