<script lang="ts">
	import Post from '$lib/components/Post.svelte';

	export let data: any;
	console.log(data);
</script>

<div class="flex w-3/4 md:w-4/5 sm:w-3/4 flex-col">
	{#each data.item as company}
		{#each company.posts as post}
			<div class="flex flex-row justify-center">
				<Post {post} {company} />
			</div>
		{/each}
	{/each}
</div>
