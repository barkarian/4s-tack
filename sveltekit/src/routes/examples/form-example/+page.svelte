<script lang="ts">
	import type { PageData } from './$types';
	import ExampleForm from './example-form.svelte';
	export let data: PageData;
</script>

<ExampleForm form={data.form} />
