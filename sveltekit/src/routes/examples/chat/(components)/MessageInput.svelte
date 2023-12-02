<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	export let newMessage = '';
	export let onSend = () => {};
</script>

<div class="flex justify-between items-center p-4 border-t">
	<Input bind:value={newMessage} placeholder="Type a message..." class="flex-1 mr-2" />
	<Button on:click={onSend}>Send</Button>
</div>
