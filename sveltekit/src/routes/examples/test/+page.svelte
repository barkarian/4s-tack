<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { writable } from 'svelte/store';
	import PwaBodyContainer from '$lib/components/pwa/PwaBodyContainer.svelte';
	import { PUBLIC_PWA_BODY_VH } from '$env/static/public';

	let messages = [
		{ text: 'Hi there!', user: 'Alice', avatar: 'https://example.com/alice-avatar.jpg' },
		{ text: 'Hello! How are you?', user: 'Bob', avatar: 'https://example.com/bob-avatar.jpg' },
		{
			text: 'I’m good, thanks for asking!',
			user: 'Alice',
			avatar: 'https://example.com/alice-avatar.jpg'
		},
		{
			text: 'Glad to hear that. Working on anything exciting?',
			user: 'Bob',
			avatar: 'https://example.com/bob-avatar.jpg'
		}
	];
	let newMessage = '';
	let chatContainer: HTMLElement | undefined; // Regular variable for DOM element reference

	function sendMessage() {
		if (newMessage.trim() !== '') {
			messages = [
				...messages,
				{
					text: newMessage,
					user: 'Current User',
					avatar: 'https://example.com/current-user-avatar.jpg'
				}
			];
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
	<div bind:this={chatContainer} class="flex flex-col-reverse overflow-y-auto flex-1 p-4">
		{#each messages as message}
			<div class={`flex ${message.user === 'Alice' ? 'flex-row-reverse' : ''} items-end mb-4`}>
				<Avatar.Root>
					<Avatar.Image src={message.avatar} alt={`@${message.user}`} class="w-12 h-12" />
					<Avatar.Fallback>{message.user.charAt(0)}</Avatar.Fallback>
				</Avatar.Root>
				<Card class={`max-w-2/3 p-2 rounded-lg relative ml-2 mr-2 ${message.user.toLowerCase()}`}>
					<strong>{message.user}</strong>
					<p>{message.text}</p>
					<div
						class={`absolute w-0 h-0 border-15 border-transparent border-t-current ${
							message.user === 'Alice'
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
