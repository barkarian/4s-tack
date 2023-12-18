<script>
	import { PUBLIC_PWA_FOORER_VH } from '$env/static/public';
	import { Github } from 'lucide-svelte';
</script>

<footer class="flex items-center justify-center p-5" style={PUBLIC_PWA_FOORER_VH}>
	<p>The footer</p>
	<a
		href="https://github.com/barkarian/4s-tack"
		target="_blank"
		rel="noopener noreferrer"
		class="mx-2 flex items-center hover:text-black"
	>
		<Github class="mr-2" color="purple" /> 4s-tack
	</a>
</footer>
