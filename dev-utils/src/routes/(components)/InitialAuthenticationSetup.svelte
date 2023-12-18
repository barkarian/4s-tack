<script lang="ts">
	import * as Card from '$lib/components/ui/card';
</script>

<div class="flex h-full flex-col gap-6">
	<!-- Introduction Section -->
	<Card.Root class="p-6 shadow-md">
		<Card.Header>
			<Card.Title>Setup Authentication with Auth0 and Strapi</Card.Title>
		</Card.Header>
		<Card.Content>
			<p>Follow these steps to connect your Auth0 account with Strapi</p>
		</Card.Content>
	</Card.Root>

	<!-- Auth0 Setup Section -->
	<Card.Root class="p-6 shadow-md">
		<Card.Header>
			<Card.Title>Auth0 -Strapi Setup</Card.Title>
		</Card.Header>
		<Card.Content>
			<ol class="list-decimal pl-6">
				<li>Create a New Auth0 API (Applications→APIs→Create API)</li>
				<li>Create an application (applications→create application)</li>
				<ul>
					<li>-Create a name and select "machine to machine application then click on create</li>
				</ul>
				<li>Configure the Auth0 application settings in the settings tab SET:</li>
				<ul>
					<li>-Allowed Logout URLs: http://localhost:5173</li>
					<li>-Allowed Web Origins: http://localhost:5173</li>
				</ul>
				<li>Scroll down to Advanced Settings->Grand Types(tab):</li>
				<ul>
					<li>-Implicit</li>
					<li>-Authorization Code</li>
					<li>-Refresh Token</li>
					<li>-Client Credentials</li>
				</ul>
				<li>Add Auth0 Settings url inside dev-utils/.env:</li>
				<ul>
					<li>-Copy the auth0 settings page url and set it to the environment variable</li>
					<li>
						-AUTH0_SETTINGS_URL=https://manage.auth0.com/dashboard/us/'some-id'/applications/'some-other-id'/settings
					</li>
				</ul>
			</ol>
		</Card.Content>
	</Card.Root>

	<!-- Strapi Auth Setup Section -->
	<Card.Root class="p-6 shadow-md">
		<Card.Header>
			<Card.Title>Add Auth0 Settings url inside dev-utils/.env</Card.Title>
		</Card.Header>
		<Card.Content>
			<ol class="list-decimal pl-6">
				<li>Start strapi</li>
				<ul>
					<li>-cd strapi && npm run dev</li>
				</ul>
				<li>Find Auth0 Provider</li>
				<ul>
					<li>-Go to http://localhost:1337/admin/settings/users-permissions/providers</li>
					<li>-Click on the "Connect a provider" button</li>
					<li>-Select Auth0</li>
					<li>-Fill in the form with the Auth0 settings</li>
					<li>-Click on save</li>
				</ul>
				<li>Configure Provider</li>
				<ul>
					<li>
						Enable:
						<code> TRUE </code>
					</li>
					<li>Client ID: <code> 'Your Auth0 Client ID' </code></li>
					<li>
						Client Secret:
						<code> 'Your Auth0 Client Secret' </code>
					</li>
					<li>
						Host URI (Subdomain):
						<code>
							'Your Auth0 tenant url',(looks like this:dev-0e2aajac.us and it derives from
							dev-0e2aajac.us.auth0.com)
						</code>
					</li>
					<li>
						The redirect URL to your front-end app:
						<code> http://localhost:5173/auth/connect/auth0/callback </code>
					</li>
				</ul>
			</ol>
		</Card.Content>
	</Card.Root>

	<!-- Strapi Auth Setup Section -->
	<Card.Root class="p-6 shadow-md">
		<Card.Header>
			<Card.Title>Notify the dev-tools about your auth0 application</Card.Title>
		</Card.Header>
		<Card.Content>
			<ol class="list-decimal pl-6">
				<li>Copy the auth0 settings page url</li>
				<li>
					set it to the environment variable:
					<p>
						<code
							>AUTH0_SETTINGS_URL=https://manage.auth0.com/dashboard/us/'some-id'/applications/'some-other-id'/settings</code
						>
					</p>
				</li>
			</ol>
		</Card.Content>
	</Card.Root>
	<!-- Conclusion -->
	<Card.Root class="p-6 shadow-md">
		<Card.Header>
			<Card.Title>Tips</Card.Title>
		</Card.Header>
		<Card.Content>
			<p>Similarly with that you can connect other oAuth providers (like Google or Facebook)</p>
		</Card.Content>
	</Card.Root>
</div>
