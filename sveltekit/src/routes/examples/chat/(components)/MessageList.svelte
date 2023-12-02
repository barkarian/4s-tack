<script lang="ts">
	import type { ChatMessage, ChatUser } from './Chat';
	import MessageItem from './MessageItem.svelte';
	export let messages: ChatMessage[] = [];
	export let currentUser: ChatUser;
	$: if (messages) {
	}
</script>

{#each messages as message}
	<MessageItem {message} {currentUser} />
{/each}
