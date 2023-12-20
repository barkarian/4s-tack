<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Form from '$lib/components/ui/form';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { cn } from '$lib/utils';
	import { Loader2 } from 'lucide-svelte';
	import { formSchema, type FormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { strapiApi } from '$lib/strapi/StrapiConfig';
	import { goto } from '$app/navigation';
	import { beforeUpdate } from 'svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	export let data: PageData;

	let form: SuperValidated<FormSchema> = data.form;
</script>

<div class="grid gap-6">
	<Form.Root id="123412421" method="POST" {form} schema={formSchema} let:config>
		<Form.Field {config} name="username">
			<Form.Item>
				<Form.Label>Username</Form.Label>
				<Form.Input />
				<Form.Description>Username</Form.Description>
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="email">
			<Form.Item>
				<Form.Label>email</Form.Label>
				<Form.Input />
				<Form.Description>Email</Form.Description>
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
