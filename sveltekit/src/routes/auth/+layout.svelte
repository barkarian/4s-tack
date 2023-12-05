<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	$page.url.pathname;
</script>

<div class="flex flex-col items-center justify-center h-full">
	<Tabs.Root
		value={$page.url.pathname === '/auth/sign-in' ? 'sign-in' : 'sign-up'}
		class="w-[400px]"
	>
		<Tabs.List class="grid w-full grid-cols-2">
			<Tabs.Trigger on:click={() => goto('/auth/sign-in')} value="sign-in">Sign in</Tabs.Trigger>
			<Tabs.Trigger on:click={() => goto('/auth/sign-up')} value="sign-up">Sign up</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="sign-in">
			<Card.Root>
				<Card.Header>
					<Card.Title>Sign-in</Card.Title>
					<Card.Description>Sign in to your Account</Card.Description>
				</Card.Header>
				<Card.Content class="space-y-2">
					<slot />
				</Card.Content>
			</Card.Root>
		</Tabs.Content>
		<Tabs.Content value="sign-up">
			<Card.Root>
				<Card.Header>
					<Card.Title>Sign up</Card.Title>
					<Card.Description>Sign Up to your Account</Card.Description>
				</Card.Header>
				<Card.Content class="space-y-2">
					<slot />
				</Card.Content>
			</Card.Root>
		</Tabs.Content>
	</Tabs.Root>
</div>
