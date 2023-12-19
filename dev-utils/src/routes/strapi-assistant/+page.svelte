<script lang="ts">
	import AssistantChatHeader from './(components)/assistant-chat/AssistantChatHeader.svelte';
	import AssistantChatMessage from './(components)/assistant-chat/AssistantChatMessage.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import type { PageData } from './$types';
	let chatContainer: HTMLElement | undefined;

	import { useChat } from 'ai/svelte';
	import { onMount } from 'svelte';
	const { messages, handleSubmit, input } = useChat({
		api: '/strapi-assistant/api/chat'
	});
	//LOAD currentUser,chatInfos and messages from the API
	export let data: PageData;
	const { sveltekitSystemContent } = data;
	if ($messages.length === 0) {
		$messages.push(
			{
				id: '1',
				role: 'system',
				content: sveltekitSystemContent
			},
			{
				id: '2',
				role: 'assistant',
				content: 'Hello, I am you assistant and I have context of your project. How can I help you?'
			}
		);
		console.log({ initialMessages: $messages });
	}

	//Here you can hanle what happens when you receive a new message
	async function scrollToBottom() {
		if (chatContainer) {
			chatContainer.scrollTop = chatContainer.scrollHeight;
		}
	}
</script>

<!-- <div class="flex h-full flex-col">
	<AssistantChatHeader
		chatName={'Assistant'}
		avatar={'https://static.vecteezy.com/system/resources/previews/010/054/157/original/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-illustration-ai-technology-futuristic-helper-communication-conversation-concept-in-flat-style-vector.jpg'}
	/>
	<div bind:this={chatContainer} class="flex flex-1 flex-col-reverse overflow-y-auto p-4">
		{#each [...$messages].reverse() as message}
			<AssistantChatMessage {message} />
		{/each}
	</div>
	<form class="flex items-center justify-between border-t p-4" on:submit={handleSubmit}>
		<Input bind:value={$input} placeholder="Type a message..." class="mr-2 flex-1" />
		<Button type="submit" on:click={() => scrollToBottom()}>Send</Button>
	</form>
</div> -->

TODO
