<script lang="ts">
	import Post from '$lib/components/Post.svelte';
	const accountIcon = '/account.svg';

	export let data: any;
	console.log(data);
	let influMode = true;
</script>

<div class="flex w-3/4 md:w-4/5 sm:w-3/4 flex-col">
	{#each data.item as company}
		{#each Object.entries(company.posts) as [index, post]}
			<div class="flex flex-row justify-center">
				<Post {post} {company} {influMode} />
			</div>
		{/each}
	{/each}
</div>
