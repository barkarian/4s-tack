<script lang="ts">
	import Easepick from '$lib/components/ui-easepick/core/Easepick.svelte';
	import { RangePlugin } from '@easepick/range-plugin';
	import type { Schema } from '@strapi/types';

	import type { EasepickConfiguration } from '$lib/components/ui-easepick/core/Easepick';
	const easepickConfig: EasepickConfiguration = {
		calendars: 2,
		grid: 2,
		plugins: [RangePlugin]
	};
</script>

<Easepick config={easepickConfig}></Easepick>
