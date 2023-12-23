<script lang="ts">
	import ToggleMode from './ToggleMode.svelte';
	import DropdownNav from './DropdownNav.svelte';
	import MenuBar from './MenuBar.svelte';
</script>

<div class="border-b">
	<div class="flex h-16 items-center px-4">
		<MenuBar></MenuBar>

		<div class="ml-auto flex items-center space-x-4">
			<ToggleMode></ToggleMode>
			<DropdownNav />
		</div>
	</div>
</div>
