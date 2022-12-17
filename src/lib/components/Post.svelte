<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	const companyLogo = '/company.svg';
	const vector = '/Vector.svg';
	export let post: any;
	export let company: any;
	export let influMode: any;
</script>

<div
	class="w-4/6  rounded-lg  border-2 shadow-md m-4 flex flex-col justify-center items-center text-black p-6"
>
	<div class="w-full  flex justify-end items-center">
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
			<h4 class="text-green-600">≈ {post.price} zł</h4>
		</div>
	</div>
	<div class="text-justify font-normal mt-2 flex justify-center items-center">
		<h1 class="flex-1  text-justify">{post.description}</h1>
	</div>
	<div class="w-full flex justify-end items-center">
		<div class="flex justify-center items-center font-extralight">
			<h1 class="text-base mr-1 text-justify ">{post.creationDate}</h1>
		</div>
	</div>
	{#if influMode}
		<div class="w-full flex justify-end items-center">
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
