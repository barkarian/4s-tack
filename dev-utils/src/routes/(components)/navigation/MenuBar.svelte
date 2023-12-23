<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import * as Menubar from '$lib/components/ui/menubar';
	import { Loader } from 'lucide-svelte';

	let bookmarks = false;
	let fullUrls = true;

	const profileRadioValue = 'benoit';
	let waitingForStrapiTypesToFrontend = false;
	let waitingForAiGeneration = false;
	let lastMessage: string | undefined = undefined;
	let lastAction: string | undefined = undefined;
	const copyStrapiTypesToFrontend = async () => {
		// Fetch the data from the API on a POST endpoint
		waitingForAiGeneration = true;
		const res = await fetch('/types-and-context/api/strapi-types-to-sveltekit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({}) // Add your request payload here
		});
		const copyStrapiTypesToFrontendResponseData = await res.json();
		waitingForAiGeneration = false;
		console.log({ copyStrapiTypesToFrontendResponseData });
		lastMessage = copyStrapiTypesToFrontendResponseData.status ?? '';
		lastAction = 'copyStrapiTypesToFrontend';
	};
	const generateContextForAiUsingAi = async () => {
		// Fetch the data from the API on a POST endpoint
		waitingForAiGeneration = true;
		const res = await fetch('/types-and-context/api/ai-context', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({}) // Add your request payload here
		});
		const aiResponseData = await res.json();
		waitingForAiGeneration = false;
		console.log({ aiResponseData });
		lastMessage = aiResponseData.status ?? '';
		lastAction = 'generateContextForAiUsingAi';
	};
</script>

<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger>Types And Context</Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item on:click={copyStrapiTypesToFrontend}>
				{#if !waitingForStrapiTypesToFrontend}
					Strapi types to sveltekit 🔧
				{:else}
					<Loader class="m-2 animate-spin"></Loader>
				{/if}
			</Menubar.Item>
			<Menubar.Item on:click={generateContextForAiUsingAi}>
				{#if !waitingForAiGeneration}
					Update AI context 🤖
				{:else}
					<Loader class="m-2 animate-spin"></Loader>
				{/if}
			</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
</Menubar.Root>

{#if (lastMessage && lastAction) || waitingForAiGeneration || waitingForStrapiTypesToFrontend}
	<Badge>
		{#if !waitingForAiGeneration && !waitingForStrapiTypesToFrontend}
			{lastAction}:{lastMessage}
		{:else}
			<Loader class="m-2 block animate-spin"></Loader>
		{/if}
	</Badge>
{/if}
