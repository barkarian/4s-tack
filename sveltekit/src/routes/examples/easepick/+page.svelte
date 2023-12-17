<script lang="ts">
	import type { EasepickConfiguration } from './(components)/easepick/Easepick';
	import { RangePlugin } from '@easepick/range-plugin';
	import Easepick from './(components)/easepick/Easepick.svelte';

	const easepickConfig: EasepickConfiguration = {
		calendars: 2,
		grid: 2,
		plugins: [RangePlugin]
	};
</script>

<Easepick config={easepickConfig}></Easepick>
