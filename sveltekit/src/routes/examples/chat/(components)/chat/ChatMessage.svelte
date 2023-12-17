<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import type { ChatMessageType, ChatUserType } from './Chat';
	export let message: ChatMessageType;
	export let currentUser: ChatUserType;
</script>

<div class={`flex ${message.userId === currentUser.id ? 'flex-row-reverse' : ''} items-end mb-4`}>
	{#if message.userId !== currentUser.id}
		<div class="flex items-end">
			<div class="relative mr-2">
				<Avatar.Root class="w-10 h-10">
					<Avatar.Image src={message.avatar} alt={`@${message.username}`} class="w-12 h-12" />
					<Avatar.Fallback>{message.username.slice(0, 2).toLocaleUpperCase()}</Avatar.Fallback>
				</Avatar.Root>
				{#if message.userIsActive}
					<!-- Adjust badge size and position for circle shape -->
					<div
						class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full h-3 w-3"
					/>
				{/if}
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
