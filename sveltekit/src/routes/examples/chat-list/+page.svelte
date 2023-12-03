<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import { Card, CardContent } from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
</script>

<div class="flex h-screen bg-white dark:bg-zinc-800">
	<aside class="w-80 border-r dark:border-zinc-700">
		<div class="p-4 space-y-4">
			<div class="flex justify-between items-center">
				<h2 class="text-xl font-bold">Messages</h2>
				<Button size="icon" variant="ghost">
					<!-- IconPencil SVG here -->
				</Button>
			</div>
			<div class="relative">
				<!-- IconSearch SVG here -->
				<Input class="pl-8" placeholder="Search messages..." type="search" />
				<Button class="absolute right-2.5 top-3" size="icon" variant="ghost">
					<!-- Button SVG/icon here -->
				</Button>
			</div>
			<div class="space-y-2">
				<Card class="p-2">
					<CardContent>
						<h3 class="font-semibold">Contact Name</h3>
						<p class="text-xs text-zinc-500 dark:text-zinc-400">Last message...</p>
					</CardContent>
				</Card>
			</div>
		</div>
	</aside>

	<section class="flex flex-col w-full">
		<header class="border-b dark:border-zinc-700 p-4">
			<h2 class="text-xl font-bold flex items-center gap-2">
				<Avatar.Root class="relative overflow-visible w-10 h-10">
					<span class="absolute right-0 top-0 flex h-3 w-3 rounded-full bg-green-600"></span>
					<Avatar.Image src="/placeholder-avatar.jpg" alt="User Avatar" />
					<Avatar.Fallback>U</Avatar.Fallback>
				</Avatar.Root>
				<div>
					Contact Name
					<span class="text-xs text-green-600 block">Online</span>
				</div>
			</h2>
		</header>
		<main class="flex-1 overflow-auto p-4">
			<div class="space-y-4">
				<div class="flex items-end gap-2">
					<div class="rounded-lg bg-zinc-200 dark:bg-zinc-700 p-2">
						<p class="text-sm">Hello, how are you?</p>
					</div>
				</div>
				<div class="flex items-end gap-2 justify-end">
					<div class="rounded-lg bg-blue-500 text-white p-2">
						<p class="text-sm">I'm fine, thanks for asking!</p>
					</div>
				</div>
			</div>
		</main>
		<footer class="border-t dark:border-zinc-700 p-4">
			<div class="flex items-center gap-2">
				<Button size="icon" variant="ghost">
					<!-- IconEmojiHappy SVG here -->
				</Button>
				<Input class="flex-1" placeholder="Type a message..." />
				<Button>Send</Button>
			</div>
		</footer>
	</section>
</div>
