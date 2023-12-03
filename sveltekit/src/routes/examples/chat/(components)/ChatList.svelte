<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { Card, CardContent } from '$lib/components/ui/card';
	import Input from '$lib/components/ui/input/input.svelte';
</script>

<div class="flex bg-white dark:bg-zinc-800">
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
	<slot />
</div>
