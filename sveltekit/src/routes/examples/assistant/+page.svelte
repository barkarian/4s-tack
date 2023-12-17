<script lang="ts">
	import AssistantChatHeader from './(components)/assistant-chat/AssistantChatHeader.svelte';
	import AssistantChatMessage from './(components)/assistant-chat/AssistantChatMessage.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import type { PageData } from './$types';
	let chatContainer: HTMLElement | undefined;

	import { useChat } from 'ai/svelte';
	const { messages, handleSubmit, input } = useChat({
		api: '/examples/assistant/api/chat'
	});
	//LOAD currentUser,chatInfos and messages from the API
	export let data: PageData;

	//Here you can hanle what happens when you receive a new message
	async function scrollToBottom() {
		if (chatContainer) {
			chatContainer.scrollTop = chatContainer.scrollHeight;
		}
	}
</script>

<div class="flex flex-col h-full">
	<AssistantChatHeader
		chatName={'Assistant'}
		avatar={'https://static.vecteezy.com/system/resources/previews/010/054/157/original/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-illustration-ai-technology-futuristic-helper-communication-conversation-concept-in-flat-style-vector.jpg'}
	/>
	<div bind:this={chatContainer} class="flex flex-col-reverse overflow-y-auto flex-1 p-4">
		{#each [...$messages].reverse() as message}
			<AssistantChatMessage {message} />
		{/each}
	</div>
	<!-- Chat Prompt -->
	<form class="flex justify-between items-center p-4 border-t" on:submit={handleSubmit}>
		<Input bind:value={$input} placeholder="Type a message..." class="flex-1 mr-2" />
		<Button type="submit" on:click={() => scrollToBottom()}>Send</Button>
	</form>
</div>
