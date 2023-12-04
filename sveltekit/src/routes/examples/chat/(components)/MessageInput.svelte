<script>
	import { createEventDispatcher } from 'svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	export let newMessage = '';

	//Create event dispatcher
	const dispatch = createEventDispatcher();
	function send() {
		if (newMessage.trim() !== '') {
			dispatch('send');
		}
	}
</script>

<div class="flex justify-between items-center p-4 border-t">
	<Input bind:value={newMessage} placeholder="Type a message..." class="flex-1 mr-2" />
	<Button on:click={send}>Send</Button>
</div>
