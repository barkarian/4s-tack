<script>
	import * as Avatar from '$lib/components/ui/avatar';

	export let chatName = '';
	export let avatar = '';
</script>

<div class="flex items-center justify-center p-4 border-b">
	<Avatar.Root class="mr-3">
		<Avatar.Image src={avatar} alt={`@${chatName}`} class="w-12 h-12 mr-2" />
		<Avatar.Fallback>{chatName.slice(0, 2).toLocaleUpperCase()}</Avatar.Fallback>
	</Avatar.Root>
	<strong>{chatName}</strong>
</div>
