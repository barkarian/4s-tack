<script>
	import { createEventDispatcher } from 'svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { useChat } from 'ai/svelte';

	const { messages, handleSubmit, input } = useChat({
		api: '/examples/assistant/api/chat'
	});

	//Create event dispatcher
	const dispatch = createEventDispatcher();
	function send() {
		dispatch('send');
	}
</script>

<div class="flex justify-between items-center p-4 border-t">
	<slot />
	<form on:submit={handleSubmit}>
		<Input bind:value={$input} placeholder="Type a message..." class="flex-1 mr-2" />
		<Button type="submit" on:click={send}>Send</Button>
	</form>
</div>
