<script>
	import { PUBLIC_PWA_FOORER_VH } from '$env/static/public';
	import { Github } from 'lucide-svelte';
</script>

<footer class="flex justify-center items-center p-5" style={PUBLIC_PWA_FOORER_VH}>
	<p>The footer</p>
	<a
		href="https://github.com/barkarian/4s-tack"
		target="_blank"
		rel="noopener noreferrer"
		class="flex items-center mx-2 hover:text-black"
	>
		<Github class="mr-2" color="purple" /> 4s-tack
	</a>
</footer>
