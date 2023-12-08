<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { redirect } from '@sveltejs/kit';
	import type { PageData } from './$types';
	import SignInForm from './sign-in-form.svelte';
	import { PUBLIC_STRAPI_URL } from '$env/static/public';
	import { goto } from '$app/navigation';
	export let data: PageData;
</script>

<div class="lg:p-8 flex">
	<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
		<div class="flex flex-col space-y-2 text-center">
			<h1 class="text-2xl font-semibold tracking-tight">Sign in</h1>
			<!-- <p class="text-sm text-muted-foreground">Enter your email below</p> -->
		</div>
		<SignInForm form={data.form} />
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

<Button
	on:click={() => {
		goto(`${PUBLIC_STRAPI_URL}/api/connect/auth0`);
	}}>Auth with Github</Button
>
