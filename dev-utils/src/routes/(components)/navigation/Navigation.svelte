<script lang="ts">
	import ToggleMode from './ToggleMode.svelte';
	import { PUBLIC_PWA_NAVBAR_VH, PUBLIC_STRAPI_URL } from '$env/static/public';
	import DropdownNav from './DropdownNav.svelte';
</script>

<div class="border-b">
	<div class="flex h-16 items-center px-4">
		<div class="ml-auto flex items-center space-x-4">
			<ToggleMode></ToggleMode>
			<DropdownNav />
		</div>
	</div>
</div>
