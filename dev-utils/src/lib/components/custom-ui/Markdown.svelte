<!-- Markdown.svelte -->
<script>
	import { marked } from 'marked';
	export let content = '';

	$: htmlContent = marked(content);
</script>

<div class="markdown">
	{@html htmlContent}
</div>

<!-- <style>
	/* Add styles for your markdown content here */
</style> -->
