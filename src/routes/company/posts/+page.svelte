<script lang="ts">
	import Post from '$lib/components/Post.svelte';

	export let data: any;
	console.log(data);
	let influMode = false;
	$: console.log(data);
</script>

<div class="flex w-3/4 md:w-4/5 sm:w-3/4 flex-col p-8">
	{#each data.item as company}
		{#each Object.entries(company.posts) as [index, post]}
			<div class="flex flex-row justify-center">
				<Post {post} {company} {influMode} id={index} />
			</div>
		{/each}
	{/each}
</div>
