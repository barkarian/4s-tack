<script lang="ts">
	import ChatHeader from './(components)/ChatHeader.svelte';
	import MessageList from './(components)/MessageList.svelte';
	import MessageInput from './(components)/MessageInput.svelte';
	import { PUBLIC_PWA_BODY_VH } from '$env/static/public';
	import type { PageData } from './$types';
	import ChatWrapper from './(components)/ChatWrapper.svelte';
	let chatContainer: HTMLElement | undefined;

	//LOAD currentUser,chatInfos and messages from the API
	export let data: PageData;
	let { currentUser, chatInfos, messages } = data;

	const chatConfig = { currentUser, chatInfos, messages };

	function sendMessage(event: CustomEvent) {
		console.log({ eventDispatched: event });
	}
</script>

<ChatWrapper {chatConfig} on:send={sendMessage}></ChatWrapper>
