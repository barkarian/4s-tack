<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log({ data });
</script>

<div class="flex flex-col h-full">
	<p>Strapi endpoints with typing examples can be found inside:</p>
	<p>src/routes/examples/strapi-endpoints/+page.server.ts</p>
</div>
