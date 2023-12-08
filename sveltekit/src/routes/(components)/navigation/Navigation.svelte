<script lang="ts">
	import UserNav from './UserNav.svelte';
	import ToggleMode from './ToggleMode.svelte';
	import { PUBLIC_PWA_NAVBAR_VH, PUBLIC_STRAPI_URL } from '$env/static/public';
	import DropDownNavBar from './HamburgerNav.svelte';
	import { userStore } from '$lib/stores';
	import { LogIn } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { goto } from '$app/navigation';
</script>

<div class="border-b" style={PUBLIC_PWA_NAVBAR_VH}>
	<div class="flex h-16 items-center px-4">
		{#if $userStore}
			<UserNav />
		{:else}
			<Button variant="outline" on:click={() => goto(`${PUBLIC_STRAPI_URL}/api/connect/auth0`)}>
				Login or Register with Auth0<LogIn />
			</Button>
		{/if}
		<div class="ml-auto flex items-center space-x-4">
			<ToggleMode></ToggleMode>
			<DropDownNavBar />
		</div>
	</div>
</div>
