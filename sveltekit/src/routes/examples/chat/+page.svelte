<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { PUBLIC_PWA_BODY_VH } from '$env/static/public';
	import { sampleMessages } from './(data)/sampleMessages';
	import type { ChatInfos, ChatUser } from './(components)/Chat';
	// const { messages, handleSubmit, input } = useChat({});
	export let currentUser: ChatUser = {
		id: 'user-002',
		username: 'Bob'
	};
	export let chatInfos: ChatInfos = {
		chatName: 'Alice',
		id: 'user-001'
	};
	export let messages = sampleMessages;
	export let newMessage = '';
	export let handleSubmit: CallableFunction = () => {
		messages = [
			{
				content: newMessage,
				userId: currentUser.id,
				username: currentUser.username
			},
			...messages
		];
		console.log(messages);
	};

	let chatContainer: HTMLElement | undefined; // Regular variable for DOM element reference
	function sendMessage() {
		if (newMessage.trim() !== '') {
			handleSubmit();
			newMessage = '';
			scrollToBottom();
		}
	}

	function scrollToBottom() {
		if (chatContainer) {
			chatContainer.scrollTop = chatContainer.scrollHeight;
		}
	}
</script>

<div class="flex flex-col" style={PUBLIC_PWA_BODY_VH}>
	<!-- New section for displaying conversing partner's details -->
	<div class="flex items-center justify-center p-4 border-b">
		<Avatar.Root class="mr-3">
			<Avatar.Image src={chatInfos.avatar} alt={`@${chatInfos.chatName}`} class="w-12 h-12 mr-2" />
			<Avatar.Fallback>{chatInfos.chatName.slice(0, 2).toLocaleUpperCase()}</Avatar.Fallback>
		</Avatar.Root>
		<strong>{chatInfos.chatName}</strong>
	</div>

	<div bind:this={chatContainer} class="flex flex-col-reverse overflow-y-auto flex-1 p-4">
		{#each [...messages] as message}
			<div
				class={`flex ${message.userId === currentUser.id ? 'flex-row-reverse' : ''} items-end mb-4`}
			>
				{#if message.userId !== currentUser.id}
					<Avatar.Root>
						<Avatar.Image src={message.avatar} alt={`@${message.username}`} class="w-12 h-12" />
						<Avatar.Fallback>{message.username.slice(0, 2).toLocaleUpperCase()}</Avatar.Fallback>
					</Avatar.Root>
				{/if}
				<Card
					class={`max-w-2/3 p-2 rounded-lg relative ml-2 mr-2 ${message.username.toLowerCase()}`}
				>
					<p>{message.content}</p>
					<div
						class={`absolute w-0 h-0 border-15 border-transparent border-t-current ${
							message.userId === currentUser.id
								? 'left-full border-l-current'
								: 'right-full border-r-current'
						}`}
						style="bottom: 0;"
					></div>
				</Card>
			</div>
		{/each}
	</div>
	<div class="flex justify-between items-center p-4 border-t">
		<Input bind:value={newMessage} placeholder="Type a message..." class="flex-1 mr-2" />
		<Button on:click={sendMessage}>Send</Button>
	</div>
</div>
