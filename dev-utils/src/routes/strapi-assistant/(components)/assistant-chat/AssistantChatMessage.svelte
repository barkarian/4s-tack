<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import type { Message } from 'ai';
	import Markdown from '$lib/components/custom-ui/Markdown.svelte';
	export let message: Message;

	//Import sveltekitAssistant avatar
	import StrapiAssistant from '../../strapiAssistant.png';
</script>

<div class={`flex ${message.role === 'user' ? 'flex-row-reverse' : ''} mb-4 items-end`}>
	{#if message.role === 'assistant'}
		<div class="flex items-end">
			<div class="relative mr-2">
				<Avatar.Root class="h-10 w-10">
					<Avatar.Image src={StrapiAssistant} alt={`@${message.role}`} class="h-12 w-12" />
					<Avatar.Fallback>{message.role.slice(0, 2).toLocaleUpperCase()}</Avatar.Fallback>
				</Avatar.Root>
			</div>

			<!-- Use Facebook's blue for incoming messages and set text color to black -->
			<Card.Root class="w-2/3 rounded-2xl rounded-bl-none bg-gray-600 p-3 dark:bg-gray-600">
				<Card.Content class="p-0">
					<Markdown content={message.content}></Markdown>
				</Card.Content>
			</Card.Root>
		</div>
	{:else if message.role === 'user'}
		<!-- Use a lighter blue for outgoing messages and set text color to black -->
		<Card.Root class="ml-auto w-2/3 rounded-2xl rounded-br-none bg-blue-500 p-3 dark:bg-purple-600">
			<Card.Content class="p-0">
				<p class="text-white">{message.content}</p>
			</Card.Content>
		</Card.Root>
	{/if}
</div>
