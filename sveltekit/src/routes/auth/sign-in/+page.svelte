<script lang="ts">
	import type { PageData } from './$types';
	import UserAuthForm from './user-auth-form.svelte';
	export let data: PageData;
</script>

<div class="lg:p-8 flex">
	<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
		<div class="flex flex-col space-y-2 text-center">
			<h1 class="text-2xl font-semibold tracking-tight">Sign in as a Partner</h1>
			<!-- <p class="text-sm text-muted-foreground">Enter your email below</p> -->
		</div>
		<UserAuthForm form={data.form} />
		<p class="px-8 text-center text-sm text-muted-foreground">
			Thank you for working with {' '}
			<a
				target="_blank"
				href="https://github.com/barkarian"
				class="underline underline-offset-4 hover:text-primary"
			>
				Me
			</a>{' '}
			.
		</p>
	</div>
</div>
