<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import type { Message } from 'ai';
	export let message: Message;
</script>

<div class={`flex ${message.role === 'user' ? 'flex-row-reverse' : ''} items-end mb-4`}>
	{#if message.role !== 'user'}
		<div class="flex items-end">
			<div class="relative mr-2">
				<Avatar.Root class="w-10 h-10">
					<Avatar.Image
						src={'https://static.vecteezy.com/system/resources/previews/010/054/157/original/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-illustration-ai-technology-futuristic-helper-communication-conversation-concept-in-flat-style-vector.jpg'}
						alt={`@${message.role}`}
						class="w-12 h-12"
					/>
					<Avatar.Fallback>{message.role.slice(0, 2).toLocaleUpperCase()}</Avatar.Fallback>
				</Avatar.Root>
			</div>

			<!-- Use Facebook's blue for incoming messages and set text color to black -->
			<Card.Root class="w-2/3 bg-gray-600 rounded-2xl p-3 rounded-bl-none dark:bg-gray-600">
				<Card.Content class="p-0">
					<p class="text-white">{message.content}</p>
				</Card.Content>
			</Card.Root>
		</div>
	{:else}
		<!-- Use a lighter blue for outgoing messages and set text color to black -->
		<Card.Root class="ml-auto w-2/3 bg-blue-500 rounded-2xl p-3 rounded-br-none dark:bg-purple-600">
			<Card.Content class="p-0">
				<p class="text-white">{message.content}</p>
			</Card.Content>
		</Card.Root>
	{/if}
</div>
