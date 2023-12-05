<script lang="ts">
	import { PUBLIC_PWA_BODY_VH } from '$env/static/public';
	import ChatHeader from '$lib/components/ui-custom/chat/ChatHeader.svelte';
	import ChatMessage from '$lib/components/ui-custom/chat/ChatMessage.svelte';
	import ChatPrompt from '$lib/components/ui-custom/chat/ChatPrompt.svelte';
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

<div class="flex flex-col" style={PUBLIC_PWA_BODY_VH}>
	<ChatHeader chatName={chatInfos.chatName} avatar={chatInfos?.meta?.avatar} />
	<div bind:this={chatContainer} class="flex flex-col-reverse overflow-y-auto flex-1 p-4">
		{#each [...messages].reverse() as message}
			<ChatMessage {message} {currentUser} />
		{/each}
	</div>
	<!-- Chat Prompt -->
	<ChatPrompt bind:newMessage on:send={sendMessage} />
</div>
