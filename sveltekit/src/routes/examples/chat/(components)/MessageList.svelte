<script lang="ts">
	import type { ChatMessage, ChatUser } from './Chat';
	import MessageItem from './MessageItem.svelte';
	export let messages: ChatMessage[] = [];
	export let currentUser: ChatUser;
</script>

<div class="flex flex-col-reverse overflow-y-auto flex-1 p-4">
	{#each messages as message}
		<MessageItem {message} {currentUser} />
	{/each}
</div>
