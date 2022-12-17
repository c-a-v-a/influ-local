<script lang="ts">
	import Post from '$lib/components/Post.svelte';
	import type { Company, FirebaseResponse } from '$lib/types';
	const accountIcon = '/account.svg';

	export let data: any;
	$:item = data.item as FirebaseResponse<Company>

	let influMode = true;
</script>

<div class="flex w-3/4 md:w-4/5 sm:w-3/4 flex-col">
	{#each Object.entries(item) as [companyId, company]}
		{#each Object.entries(company.posts) as [postId, post]}
			<div class="flex flex-row justify-center">
				<Post {post} {company} {influMode} postId={postId} companyId={companyId}/>
			</div>
		{/each}
	{/each}
</div>
<div class="flex items-start mr-5 mt-5">
	<img src={accountIcon} class="h-16 w-16" />
</div>
