<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Form from '$lib/components/ui/form';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { cn } from '$lib/utils';
	import { Loader2 } from 'lucide-svelte';
	import { formSchema, type FormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { strapiApi } from '$lib/components/strapi/StrapiConfig';
	import { goto } from '$app/navigation';

	export let form: SuperValidated<FormSchema>;
	let errorMessage: any;
	async function handleLogin() {
		try {
			const response = await strapiApi.login({
				identifier: form.data.username,
				password: form.data.password
			});
			console.log({ response });
			// Navigate to a protected route or dashboard
			goto('/');
		} catch (err) {
			errorMessage = err;
			console.log(err);
		}
	}
</script>

{errorMessage}
<div class="grid gap-6">
	<Form.Root on:submit={handleLogin} method="POST" {form} schema={formSchema} let:config>
		<Form.Field {config} name="username">
			<Form.Item>
				<Form.Label>Username</Form.Label>
				<Form.Input />
				<Form.Description>Username or Email</Form.Description>
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="password">
			<Form.Item>
				<Form.Label>Password</Form.Label>
				<Form.Input class="password" />
				<Form.Description>Password should be strong</Form.Description>
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Button>Submit</Form.Button>
	</Form.Root>
</div>
