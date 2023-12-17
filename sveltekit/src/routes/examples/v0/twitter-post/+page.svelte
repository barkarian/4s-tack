<script lang="ts">
	import { Card } from '$lib/components/ui/card';
	import { Heart, MessageCircle, Repeat, Twitter } from 'lucide-svelte';
</script>

<Card
	class="w-[500px] mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-3xl m-3"
>
	<div class="md:flex">
		<div class="md:flex-shrink-0">
			<span class="object-cover md:w-48 rounded-md bg-muted w-[192px] h-[192px]" />
		</div>
		<div class="p-8 w-full">
			<div class="flex items-center justify-between">
				<div class="flex items-center">
					<img
						alt="Profile picture"
						class="rounded-full"
						height="40"
						src="/placeholder.svg"
						style="aspect-ratio: 40/40; object-fit: cover;"
						width="40"
					/>
					<div class="ml-4">
						<div class="uppercase tracking-wide text-sm text-black dark:text-white font-semibold">
							Chamath Palihapitiya
						</div>
						<div class="text-gray-400 dark:text-gray-300">@chamath</div>
					</div>
				</div>
				<Twitter class="h-6 w-6 text-blue-500 fill-current" />
			</div>
			<p class="mt-4 text-gray-500 dark:text-gray-300">
				I’m in the arena trying stuff. Some will work, some won’t. But always learning. You’re
				anonymous and afraid of your own shadow. Enjoy the sidelines.
			</p>
			<div class="flex mt-6 justify-between items-center">
				<div class="flex space-x-4 text-gray-400 dark:text-gray-300">
					<div class="flex items-center">
						<Heart class="h-6 w-6 text-red-500" />
						<span class="ml-1 text-red-500">566</span>
					</div>
					<div class="flex items-center">
						<MessageCircle class="h-6 w-6 text-green-500" />
						<span class="ml-1 text-green-500">241</span>
					</div>
					<div class="flex items-center">
						<Repeat class="h-6 w-6 text-blue-500" />
						<span class="ml-1 text-blue-500">487</span>
					</div>
				</div>
				<div class="text-gray-400 dark:text-gray-300">7:22 AM · Aug 22, 2023</div>
			</div>
		</div>
	</div>
</Card>
