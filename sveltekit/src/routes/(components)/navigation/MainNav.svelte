<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<nav class={cn('flex items-center space-x-4 lg:space-x-6', className)}>
	<a
		href="/examples/easepick"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		ease-pick
	</a>
	<a
		href="/examples/form"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		form-example
	</a>
	<a
		href="/examples/chat"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		chat-example
	</a>
	<a
		href="/auth/sign-in"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		sign-in
	</a>
	<a
		href="/examples/strapi-endpoints"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		strapi-endpoints
	</a>
</nav>
