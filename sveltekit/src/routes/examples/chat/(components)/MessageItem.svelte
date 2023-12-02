<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import type { ChatMessage, ChatUser } from './Chat';
	export let message: ChatMessage;
	export let currentUser: ChatUser;
</script>

<div class={`flex ${message.userId === currentUser.id ? 'flex-row-reverse' : ''} items-end mb-4`}>
	{#if message.userId !== currentUser.id}
		<Avatar.Root>
			<Avatar.Image src={message.avatar} alt={`@${message.username}`} class="w-12 h-12" />
			<Avatar.Fallback>{message.username.slice(0, 2).toLocaleUpperCase()}</Avatar.Fallback>
		</Avatar.Root>
	{/if}
	<Card class={`max-w-2/3 p-2 rounded-lg relative ml-2 mr-2 ${message.username.toLowerCase()}`}>
		<p>{message.content}</p>
		<!-- ... -->
	</Card>
</div>
