<script lang="ts">
	import { goto } from '$app/navigation';
	import { userStore } from '$lib/stores';

	$userStore = undefined;
	localStorage.removeItem('userStoreData');
	//Where to redirect?
	// goto('/');
</script>

<p>Go inside /auth/logout and tell it where to redirect</p>
