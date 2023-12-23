<script lang="ts">
	import * as Alert from '$lib/components/ui/alert';
	import * as Card from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Hammer, Brain, AlertCircle, Loader } from 'lucide-svelte'; // Replacing CookieIcon with a lucide-svelte icon
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let message: string | undefined = undefined;
	let waitingForAiGeneration = false;
	const { status } = data;
	let success: boolean | undefined = undefined;
	const generateSchemaDocumentationUsingAi = async () => {
		// Fetch the data from the API on a POST endpoint
		try {
			waitingForAiGeneration = true;
			const res = await fetch('/types-generation/api/ai-generations', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({}) // Add your request payload here
			});
			const aiResponseData = await res.json();
			success = true;
			message =
				'AI generation completed SUCCESSFULLY and content is stored in /dev-utils/entitiesRelationDocs.txt 🎉';
			console.log({ aiResponseData });
		} catch (e) {
			success = false;
			message = 'Error with AI generation completed - check console logs';
			console.log(e);
		} finally {
			waitingForAiGeneration = false;
		}
	};
</script>

{#if status === 'ok'}
	<div class="flex h-full flex-col gap-6 p-8">
		<Card.Root class=" mx-auto ml-auto block w-full max-w-lg p-8">
			{#if message}
				<Alert.Root variant={success ? 'default' : 'destructive'} class="mx-auto ml-auto block">
					<AlertCircle />
					<Alert.Title>Heads up!</Alert.Title>
					<Alert.Description>{message}</Alert.Description>
				</Alert.Root>
				<!-- <p>{message}</p> -->
			{/if}
			<Card.Header class="border-dark-gray-300 border-b pb-4">
				<div class="flex items-center">
					<Hammer class="mr-2" />
					<Card.Title>Types have been generated for frontend and backend!🥳</Card.Title>
				</div>
				<Card.Description>
					Your types have been generated and imported for strapi and sveltekit projects
				</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-4 pt-4">
				<div class="flex items-start justify-between space-y-2">
					<div>
						<Label for="essential">Generate AI schema description ✨</Label>
						<p class="text-dark-gray-500 text-sm">
							The AI will automatically generate a psudo typescript to understand your entities
							better.
						</p>
						<p class="text-dark-gray-500 text-sm">
							We then can pass that data as context to the Generative AI actions.
						</p>
					</div>
				</div>
				<div class="flex items-start justify-between space-y-2">
					<div>
						<Label for="essential">Document you schema structure 🔮</Label>

						<p class="text-dark-gray-500 text-sm">
							The AI will know exactly what your entities are and how they are related to each
							other!
						</p>
					</div>
				</div>
				<!-- Repeat for Analytics and Marketing cookies -->
				<!-- Put the button in the center -->
			</Card.Content>
			{#if waitingForAiGeneration}
				<Loader class="mx-auto ml-auto block"></Loader>
			{:else}
				<Button class="mx-auto ml-auto block" on:click={() => generateSchemaDocumentationUsingAi()}
					>Generate Schemas and Relations Documentation🪄</Button
				>
			{/if}
			<div class="border-dark-gray-300 mt-4 border-t" />
			<Card.Footer>
				<Brain class="mr-2" />
				<p>
					This will generate the schema description and will store it inside
					/dev-utils/entitiesRelationDocs.txt
				</p>
			</Card.Footer>
		</Card.Root>
	</div>
{:else}
	Something went wrong check the console logs
{/if}
