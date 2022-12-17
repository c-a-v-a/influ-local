<script lang="ts">
	import type { CompanyPost } from '../../../../lib/types';
	import Button from '$lib/components/Button.svelte';
	let hideCategoriesSelect = true;
	let categories: any = [
		{
			name: 'Odzież'
		},
		{
			name: 'Restauracje'
		},
		{
			name: 'Rozrywka'
		},
		{
			name: 'Artykuły sportowe'
		},
		{
			name: 'Turystyka'
		}
	];
	let selectedCategory: any = undefined;
	let text = '';
	let sallary = '';
	let city = '';
	let campaignName = '';

	const addPost = () => {
		if (text == '') return;
		if (selectedCategory == undefined) return;
		if (sallary == '') return;
		if (city == '') return;
		if (campaignName == '') return;

		let obj: CompanyPost = {
			name: campaignName,
			description: text,
			influencers: [],
			price: sallary,
			creationDate: new Date().toLocaleDateString('en-US'),
			category: selectedCategory
		};
		console.log(obj);
	};
</script>

<div class="flex w-3/4 md:w-4/5 sm:w-3/4 flex-col p-8">
	<div class="space-y-8 divide-y divide-gray-200 w-full">
		<div class="space-y-8 divide-y divide-gray-200">
			<div>
				<div>
					<h3 class="text-lg font-medium leading-6 text-gray-900">Dodaj nowy post</h3>
					<p class="mt-1 text-sm text-gray-500">
						Wypełnij poniższe informacje, aby znaleźć influencerów do zareklamowania Twojego
						produktu
					</p>
				</div>

				<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
					<div class="sm:col-span-4">
						<label for="username" class="block text-sm font-medium text-gray-700"
							>Tytuł zadania</label
						>
						<div class="mt-1 flex rounded-md shadow-sm w-1/2">
							<input
								required
								bind:value={campaignName}
								type="text"
								name="username"
								id="username"
								autocomplete="username"
								class="block border w-full min-w-0 flex-1 p-1  rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 sm:text-sm"
							/>
						</div>
					</div>

					<div class="sm:col-span-6">
						<label for="about" class="block text-sm font-medium text-gray-700">Opis</label>
						<div class="mt-1">
							<textarea
								required
								bind:value={text}
								id="about"
								name="about"
								rows="3"
								class="p-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 sm:text-sm border"
							/>
						</div>
						<p class="mt-2 text-sm text-gray-500">
							Napisz krótką informację odnośnie wymagań dotyczących reklamy
						</p>
					</div>

					<div class="sm:col-span-4">
						<label for="city" class="block text-sm font-medium text-gray-700">Miasto</label>
						<div class="mt-1 flex rounded-md shadow-sm w-1/2">
							<input
								required
								bind:value={city}
								type="text"
								name="city"
								id="city"
								autocomplete="city"
								class="block border w-full min-w-0 flex-1 p-1  rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 sm:text-sm"
							/>
						</div>
					</div>

					<div class="sm:col-span-4">
						<label for="username" class="block text-sm font-medium text-gray-700"
							>Wynagrodzenie (PLN)</label
						>
						<div class="mt-1 flex rounded-md shadow-sm w-1/2">
							<input
								required
								bind:value={sallary}
								type="text"
								name="username"
								id="username"
								autocomplete="username"
								class="block border w-full min-w-0 flex-1 p-1  rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 sm:text-sm"
							/>
						</div>
					</div>

					<div class="sm:col-span-6 flex justify-start items-center">
						<div class="relative inline-block text-left">
							<div>
								<button
									on:click={() => (hideCategoriesSelect = !hideCategoriesSelect)}
									type="button"
									class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
									id="menu-button"
									aria-expanded="true"
									aria-haspopup="true"
								>
									Kategoria
									<!-- Heroicon name: mini/chevron-down -->
									<svg
										class="-mr-1 ml-2 h-5 w-5"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>
							</div>

							<div
								hidden={hideCategoriesSelect}
								class=" cursor-pointer absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="menu-button"
								tabindex="-1"
							>
								{#each categories as category}
									<button
										on:click={() => {
											selectedCategory = category;
											hideCategoriesSelect = true;
										}}
										class="p-1 px-4 divide-y hover:bg-gray-100 w-full"
									>
										<!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
										<div class="flex justify-start items-center py-1">
											<!-- Heroicon name: mini/pencil-square -->

											<img src={'/' + category.name + '.png'} class="mr-3 h-5 w-5" />
											{category.name}
										</div>
									</button>
								{/each}
							</div>
						</div>
						<div class="ml-2 text-sm font-light flex justify-start items-center">
							{#if !selectedCategory}
								Wybierz kategorie
							{:else}
								<img src={'/' + selectedCategory.name + '.png'} class="mr-1 h-5 w-5" />
								{selectedCategory.name}
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="pt-5">
			<div class="flex justify-end">
				<Button on:click={() => addPost()}>
					<div class="flex justify-center items-center">
						<img src="/Plus.svg" alt="plus" class="w-5 h-5 mr-1" />
						Dodaj post
					</div>
				</Button>
			</div>
		</div>
	</div>
</div>
