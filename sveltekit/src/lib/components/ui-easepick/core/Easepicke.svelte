<script lang="ts">
	import { onMount } from 'svelte';
	import { create } from '@easepick/bundle';
	import type { IPickerConfig } from '@easepick/core/dist/types';
	import type { EasepickConfiguration } from './Easepick';
	export let config: EasepickConfiguration;
	export let className = '';

	let iPickerConfig: IPickerConfig = {
		element: '#easepick',
		css: ['https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css'],
		zIndex: 10,
		...config
	};

	onMount(() => {
		const picker = new create(iPickerConfig);
	});

	import { Input } from '$lib/components/ui/input';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<form class="flex w-full max-w-sm items-center space-x-2">
	<Input id="easepick" class={className} type="email" placeholder="date range" />
	<Button type="submit">Send Date</Button>
</form>
