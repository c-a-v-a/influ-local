<script lang="ts">
	import Post from '$lib/components/Post.svelte';
	const accountIcon = '/account.svg';

	import type { FirebaseResponse, Company } from '$lib/types';

	export let data: any;
	$: item = data.item as FirebaseResponse<Company>;

	let influMode = false;
	$: console.log(data);
</script>

<div class="flex w-3/4 md:w-4/5 sm:w-3/4 flex-col">
	{#each Object.entries(item) as [companyId, company]}
		{#each Object.entries(company.posts) as [index, post]}
			<div class="flex flex-row justify-center">
				<Post {post} {company} {influMode} postId={null} companyId={null} id={index} />
			</div>
		{/each}
	{/each}
</div>
