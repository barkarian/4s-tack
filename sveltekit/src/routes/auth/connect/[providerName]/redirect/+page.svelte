<script lang="ts">
	import { goto } from '$app/navigation';
	import { beforeUpdate, onMount } from 'svelte';
	import type { PageData } from './$types';
	import { redirect } from '@sveltejs/kit';

	export let data: PageData;
	const { errorMessage } = data;
</script>

<!-- AUTH FAIL SCHENARIO -->
<!-- (SUCCESSFUL AUTH REDIRECTS TO /auth/authenticated) -->
<p>Modify from: /connect/[providerName]/redirect</p>
<p>{errorMessage}</p>
