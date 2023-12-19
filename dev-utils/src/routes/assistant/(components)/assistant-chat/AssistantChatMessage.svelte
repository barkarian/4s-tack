<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import type { Message } from 'ai';
	export let message: Message;
	// Define a type for the parts of content
	type ContentPart = {
		type: 'text' | 'code';
		value: string;
	};

	// Function to parse content and separate code from text
	function parseContent(content: string): ContentPart[] {
		const codeRegex: RegExp = /<<<code>>>(.*?)<<<end_code>>>/gs;
		let parts: ContentPart[] = [];
		let lastIndex: number = 0;

		content.replace(codeRegex, (match: string, code: string, index: number) => {
			// Add text before code
			if (index > lastIndex) {
				parts.push({ type: 'text', value: content.slice(lastIndex, index) });
			}
			// Add code
			parts.push({ type: 'code', value: code });
			lastIndex = index + match.length;
			return ''; // Return value is not used
		});

		// Add remaining text after the last code block
		if (lastIndex < content.length) {
			parts.push({ type: 'text', value: content.slice(lastIndex) });
		}

		return parts;
	}
</script>

<div class={`flex ${message.role === 'user' ? 'flex-row-reverse' : ''} mb-4 items-end`}>
	{#if message.role !== 'user'}
		<div class="flex items-end">
			<div class="relative mr-2">
				<Avatar.Root class="h-10 w-10">
					<Avatar.Image
						src={'https://static.vecteezy.com/system/resources/previews/010/054/157/original/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-illustration-ai-technology-futuristic-helper-communication-conversation-concept-in-flat-style-vector.jpg'}
						alt={`@${message.role}`}
						class="h-12 w-12"
					/>
					<Avatar.Fallback>{message.role.slice(0, 2).toLocaleUpperCase()}</Avatar.Fallback>
				</Avatar.Root>
			</div>

			<!-- Use Facebook's blue for incoming messages and set text color to black -->
			<Card.Root class="w-2/3 rounded-2xl rounded-bl-none bg-gray-600 p-3 dark:bg-gray-600">
				<Card.Content class="p-0">
					{#each parseContent(message.content) as part}
						{#if part.type === 'code'}
							<pre><code>{part.value}</code></pre>
						{:else}
							<p class="text-white">{part.value}</p>
						{/if}
					{/each}
				</Card.Content>
			</Card.Root>
		</div>
	{:else}
		<!-- Use a lighter blue for outgoing messages and set text color to black -->
		<Card.Root class="ml-auto w-2/3 rounded-2xl rounded-br-none bg-blue-500 p-3 dark:bg-purple-600">
			<Card.Content class="p-0">
				<p class="text-white">{message.content}</p>
			</Card.Content>
		</Card.Root>
	{/if}
</div>
