<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { PUBLIC_PWA_BODY_VH } from '$env/static/public';
	import { sampleMessages } from './(data)/sampleMessages';
	import { useChat } from 'ai/svelte';
	// const { messages, handleSubmit, input } = useChat({});

	let messages = sampleMessages;
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

	// New variables for the conversing partner's details
	let partnerName = 'Partner Name'; // Replace with dynamic data if needed
	let partnerAvatar = 'https://example.com/partner-avatar.jpg'; // Replace with dynamic data
</script>

<div class="flex flex-col" style={PUBLIC_PWA_BODY_VH}>
	<!-- New section for displaying conversing partner's details -->
	<div class="flex items-center p-4 border-b">
		<Avatar.Root>
			<Avatar.Image src={partnerAvatar} alt={`@${partnerName}`} class="w-12 h-12 mr-2" />
			<Avatar.Fallback>{partnerName.slice(0, 2).toLocaleUpperCase()}</Avatar.Fallback>
		</Avatar.Root>
		<strong>{partnerName}</strong>
	</div>

	<div bind:this={chatContainer} class="flex flex-col-reverse overflow-y-auto flex-1 p-4">
		{#each messages as message}
			<div class={`flex ${message.user === 'Alice' ? 'flex-row-reverse' : ''} items-end mb-4`}>
				<Avatar.Root>
					<Avatar.Image src={message.avatar} alt={`@${message.user}`} class="w-12 h-12" />
					<Avatar.Fallback>{message.user.slice(0, 2).toLocaleUpperCase()}</Avatar.Fallback>
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
