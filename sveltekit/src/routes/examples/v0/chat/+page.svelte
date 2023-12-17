<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Pencil, Search, Smile } from 'lucide-svelte';
</script>

<div class="flex h-full bg-white dark:bg-zinc-800">
	<aside class="w-80 border-r dark:border-zinc-700">
		<div class="p-4 space-y-4">
			<div class="flex justify-between items-center">
				<h2 class="text-xl font-bold">Messages</h2>
				<Button size="icon" variant="ghost">
					<Pencil class="w-6 h-6" />
				</Button>
			</div>
			<div class="relative">
				<Search class="absolute left-2.5 top-3 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
				<Input class="pl-8" placeholder="Search messages..." type="search" />
				<Button class="absolute right-2.5 top-3" size="icon" variant="ghost" />
			</div>
			<div class="space-y-2">
				<Card.Root class="p-2">
					<Card.Content>
						<h3 class="font-semibold">Contact Name</h3>
						<p class="text-xs text-zinc-500 dark:text-zinc-400">Last message...</p>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	</aside>
	<section class="flex flex-col w-full">
		<header class="border-b dark:border-zinc-700 p-4">
			<h2 class="text-xl font-bold flex items-center gap-2">
				<Avatar.Root class="relative overflow-visible w-10 h-10">
					<span class="absolute right-0 top-0 flex h-3 w-3 rounded-full bg-green-600" />
					<Avatar.Image alt="User Avatar" src="/placeholder-avatar.jpg" />
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
				<!-- Message content -->
			</div>
		</main>
		<footer class="border-t dark:border-zinc-700 p-4">
			<div class="flex items-center gap-2">
				<Button size="icon" variant="ghost">
					<Smile class="w-6 h-6" />
				</Button>
				<Input class="flex-1" placeholder="Type a message..." />
				<Button>Send</Button>
			</div>
		</footer>
	</section>
</div>
