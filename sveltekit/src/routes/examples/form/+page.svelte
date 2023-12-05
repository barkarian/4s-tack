<script lang="ts">
	import type { PageData } from './$types';
	import ExampleForm from './example-form.svelte';
	export let data: PageData;
</script>

<div class="flex flex-col h-full">
	<ExampleForm form={data.form} />
</div>
