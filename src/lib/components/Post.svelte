<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	const companyLogo = '/company.svg';
	const vector = '/Vector.svg';
	export let post: any;
	export let company: any;
	export let influMode: any;
	export let id: string;
</script>

<div
	on:click={() => {
		if (influMode) return;
		goto($page.url.pathname + '/' + id);
	}}
	class="w-4/6 border-1 shadow-md m-4 rounded-md flex flex-col justify-center items-center text-black {influMode
		? 'cursor-auto'
		: 'cursor-pointer'}"
>
	<div
		class="flex justify-center items-center flex-col w-full p-6 headerPost rounded-md text-white"
	>
		<div class="w-full flex justify-end items-center ">
			<div class="flex justify-center items-center font-light">
				<h1 class="text-lg mr-1">{company.localization}</h1>
				<img src="/cityIcon.svg" class=" w-12 h-12" alt="dada" />
			</div>
		</div>
		<div class="w-full  flex justify-start items-center">
			<div class="flex flex-col justify-center items-center text-sm mr-3">
				{#if company.logo}
					<img src={company.logo} class=" w-16 h-16" alt="xd" />
				{:else}
					<img src={companyLogo} class=" w-16 h-16" alt="a" />
				{/if}
				{company.name}
			</div>
			<div class="flex flex-col">
				<h1 class="text-4xl -mt-4">{post.name}</h1>
				<h4 style="color: #ffd24c;">≈ {post.price} zł</h4>
			</div>
		</div>
	</div>
	<div class="flex justify-center flex-col w-full p-6">
		<div class="text-justify font-normal mt-2 flex justify-center items-center bg-white">
			<h1 class="flex-1  text-justify">{post.description}</h1>
		</div>
		<div class="w-full flex justify-end items-center bg-white">
			<div class="flex justify-center items-center font-extralight">
				<h1 class="text-base mr-1 text-justify ">{post.creationDate}</h1>
			</div>
		</div>
		{#if influMode}
			<div class="w-full flex justify-end items-center bg-white">
				<div class="flex justify-center items-center font-extralight">
					<Button>
						<div class="flex flex-row">
							<img src={vector} class="w-5 h-5 mr-1" alt="xd" />
							Aplikuj do kampanii
						</div>
					</Button>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.headerPost {
		background-color: #002055;
	}
</style>
