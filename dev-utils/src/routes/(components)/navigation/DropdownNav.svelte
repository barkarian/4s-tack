<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		><!-- Hamburger Icon -->
		<Button variant="outline" size="icon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Label>Assistants</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.Item
				on:click={() => {
					goto('/sveltekit-assistant');
				}}>Sveltekit Assistant</DropdownMenu.Item
			>
			<DropdownMenu.Item
				on:click={() => {
					goto('/strapi-assistant');
				}}>Strapi Assistant</DropdownMenu.Item
			>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
