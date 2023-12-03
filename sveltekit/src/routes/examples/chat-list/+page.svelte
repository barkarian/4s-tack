<script lang="ts">
	import ChatHeader from '../chat/(components)/ChatHeader.svelte';
	import MessageList from '../chat/(components)/MessageList.svelte';
	import MessageInput from '../chat/(components)/MessageInput.svelte';
	import { PUBLIC_PWA_BODY_VH } from '$env/static/public';
	import type { PageData } from './$types';
	import ChatList from '../chat/(components)/ChatList.svelte';
	let chatContainer: HTMLElement | undefined;

	//LOAD currentUser,chatInfos and messages from the API
	export let data: PageData;
	let { currentUser, chatInfos, messages } = data;
	let newMessage = '';

	function sendMessage(event: CustomEvent) {
		if (newMessage.trim() !== '') {
			//Handle New Message
			messages = [
				{
					content: newMessage,
					userId: currentUser.id,
					username: currentUser.username
				},
				...messages
			];
			console.log(messages);
			//Set message to "" and scroll to bottom
			newMessage = '';
			if (chatContainer) {
				chatContainer.scrollTop = chatContainer.scrollHeight;
			}
		}
	}
</script>

<ChatList>
	<div class="flex flex-col" style={PUBLIC_PWA_BODY_VH}>
		<!-- New section for displaying conversing partner's details -->
		<ChatHeader chatName={chatInfos.chatName} avatar={chatInfos.avatar} />

		<div bind:this={chatContainer} class="flex flex-col-reverse overflow-y-auto flex-1 p-4">
			<MessageList {messages} {currentUser} />
		</div>
		<MessageInput bind:newMessage on:send={sendMessage} />
	</div>
</ChatList>
