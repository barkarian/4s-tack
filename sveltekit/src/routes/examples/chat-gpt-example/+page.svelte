<script lang="ts">
	import { useChat } from 'ai/svelte';

	const { messages, handleSubmit, input } = useChat({});
	const gptAvatar = 'https://thelasttrombone.files.wordpress.com/2022/12/chatgpt_logo.jpg';
</script>

<ul>
	{#each $messages as message}
		<li>{message.role} says...{message.content}</li>
	{/each}
</ul>

<form on:submit={handleSubmit}>
	<input bind:value={$input} />
	<button type="submit">Send</button>
</form>
