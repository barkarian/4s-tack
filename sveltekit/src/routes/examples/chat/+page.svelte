<script lang="ts">
	import ChatHeader from './(components)/chat/ChatHeader.svelte';
	import ChatMessage from './(components)/chat/ChatMessage.svelte';
	import ChatPrompt from './(components)/chat/ChatPrompt.svelte';
	import type { PageData } from './$types';
	let chatContainer: HTMLElement | undefined;

	//LOAD currentUser,chatInfos and messages from the API
	export let data: PageData;
	let { currentUser, chatInfos, messages } = data;
	let newMessage = '';

	//Here you can hanle what happens when you receive a new message
	async function sendMessage() {
		messages = [
			...messages,
			{
				content: newMessage,
				userId: currentUser.id,
				username: currentUser.username
			}
		];
		newMessage = '';
		if (chatContainer) {
			chatContainer.scrollTop = chatContainer.scrollHeight;
		}
	}
</script>

<div class="flex flex-col h-full">
	<ChatHeader chatName={chatInfos.chatName} avatar={chatInfos?.meta?.avatar} />
	<div bind:this={chatContainer} class="flex flex-col-reverse overflow-y-auto flex-1 p-4">
		{#each [...messages].reverse() as message}
			<ChatMessage {message} {currentUser} />
		{/each}
	</div>
	<!-- Chat Prompt -->
	<ChatPrompt bind:newMessage on:send={sendMessage}>
		<!-- SLOT -->
	</ChatPrompt>
</div>
