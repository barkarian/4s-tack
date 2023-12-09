<script lang="ts">
	import { goto } from '$app/navigation';
	import { userStore } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$userStore = undefined;
		localStorage.removeItem('userStoreData');
		// goto('/');
	});
</script>

<p>
	Cookies,Local Storage and stores are clear...Go to /auth/logout and tell it where it should
	redirect after here
</p>
