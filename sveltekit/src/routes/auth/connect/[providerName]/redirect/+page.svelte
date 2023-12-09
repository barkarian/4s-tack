<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { errorMessage } = data;
</script>

<!-- AUTH FAIL SCHENARIO -->
<!-- (SUCCESSFUL AUTH REDIRECTS TO /auth/authenticated) -->
<p>Modify from: /connect/[providerName]/redirect</p>
<p>{errorMessage}</p>
