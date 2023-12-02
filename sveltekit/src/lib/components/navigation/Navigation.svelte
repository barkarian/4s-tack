<script lang="ts">
	import UserNav from './UserNav.svelte';
	import MainNav from './MainNav.svelte';
	import ToggleMode from './ToggleMode.svelte';
	import { PUBLIC_PWA_NAVBAR_VH } from '$env/static/public';
</script>

<div class="border-b" style={PUBLIC_PWA_NAVBAR_VH}>
	<div class="flex h-16 items-center px-4">
		<MainNav class="mx-6" />
		<div class="ml-auto flex items-center space-x-4">
			<UserNav />
			<ToggleMode></ToggleMode>
		</div>
	</div>
</div>
