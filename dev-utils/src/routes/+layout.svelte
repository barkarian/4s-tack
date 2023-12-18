<script>
	import '../app.pcss';
	import Footer from './(components)/footer/Footer.svelte';
	import { PUBLIC_PWA_BODY_VH } from '$env/static/public';
	import Navigation from './(components)/navigation/Navigation.svelte';
</script>

<div class="flex min-h-screen flex-col">
	<Navigation />
	<div style={PUBLIC_PWA_BODY_VH}>
		<slot />
	</div>
	<Footer></Footer>
</div>
