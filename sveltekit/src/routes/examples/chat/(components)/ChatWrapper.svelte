<script lang="ts">
	import ChatHeader from './ChatHeader.svelte';
	import MessageList from './MessageList.svelte';
	import { PUBLIC_PWA_BODY_VH } from '$env/static/public';
	import type { ChatInfos, ChatMessage, ChatUser } from './Chat';
	import { createEventDispatcher } from 'svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	let chatContainer: HTMLElement | undefined;

	//LOAD currentUser,chatInfos and messages from the API
	export let chatConfig: {
		currentUser: ChatUser;
		chatInfos: ChatInfos;
		messages: ChatMessage[];
	};

	let { currentUser, chatInfos, messages } = chatConfig;
	let newMessage = '';
	//Create dispatcher
	const dispatch = createEventDispatcher();
	async function send() {
		if (newMessage.trim() === '') return;
		await sendMessage();
		newMessage = '';
		if (chatContainer) {
			chatContainer.scrollTop = chatContainer.scrollHeight;
		}
		dispatch('send', { message: newMessage });
	}

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
		console.log(messages);
	}
</script>

<div class="flex flex-col" style={PUBLIC_PWA_BODY_VH}>
	<ChatHeader chatName={chatInfos.chatName} avatar={chatInfos?.meta?.avatar} />

	<div bind:this={chatContainer} class="flex flex-col-reverse overflow-y-auto flex-1 p-4">
		<MessageList {messages} {currentUser} />
	</div>
	<!-- Chat Prompt -->
	<div class="flex justify-between items-center p-4 border-t">
		<Input bind:value={newMessage} placeholder="Type a message..." class="flex-1 mr-2" />
		<Button on:click={send}>Send</Button>
	</div>
</div>
