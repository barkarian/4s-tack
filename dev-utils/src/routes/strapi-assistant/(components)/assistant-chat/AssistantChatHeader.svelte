<script>
	import * as Avatar from '$lib/components/ui/avatar';

	export let chatName = '';
	export let avatar = '';
</script>

<header class="border-b dark:border-zinc-700 p-4">
	<h2 class="text-xl font-bold flex items-center gap-2">
		<Avatar.Root class="relative overflow-visible w-10 h-10">
			<span class="absolute right-0 top-0 flex h-3 w-3 rounded-full bg-green-600"></span>
			<Avatar.Image src={avatar} alt={`@${chatName}`} />
			<Avatar.Fallback>{chatName.slice(0, 2).toLocaleUpperCase()}</Avatar.Fallback>
		</Avatar.Root>
		<div>
			{chatName}
			<span class="text-xs text-green-600 block">Online</span>
		</div>
	</h2>
</header>
