<script lang="ts">
	import type { ChatMessage, ChatUser } from './Chat';
	import MessageItem from './MessageItem.svelte';
	export let messages: ChatMessage[] = [];
	export let currentUser: ChatUser;
</script>

{#each [...messages].reverse() as message}
	<MessageItem {message} {currentUser} />
{/each}
