<script lang="ts">
	export let data: any;
	import { page } from '$app/stores';
	let headers = ['Nazwa', 'SocialMedia', 'Ocena', 'Miasto', 'Email', 'Interakcja'];
	let users1 = [
		{ name: 'Filip', socials: 'TikTok, Instagram', rating: '5', city: 'Kraków' },
		{ name: 'Kuba', socials: 'TikTok, Instagram', rating: '5', city: 'Warszawa' },
		{ name: 'Michal', socials: 'TikTok, Instagram', rating: '5', city: 'Kielce' }
	];

	let influArr = data.item[0].posts[Number($page.url.pathname.split('/').pop())];

	let usersKeys = Object.keys(data.Influs).filter((el: any) => {
		if (influArr?.influencers && influArr.influencers.includes(el)) return true;
		return false;
	});
	let users = Object.entries(data.Influs)
		.map(([x, y]) => {
			if (usersKeys.includes(x)) return y;
		})
		.filter((x) => x != undefined) as [any];

	console.log(users);
	const acceptInflu = () => {};
</script>

<div class="flex w-5/6 md:w-4/5 sm:w-3/4 flex-col p-8">
	<div class=" mt-12 flex w-full flex-col">
		<div class=" flex flex-col px-1 sm:px-8 lg:px-10">
			<div class=" overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
					<div class="overflow-hidden">
						<table class=" min-w-full cursor-default text-center">
							<thead>
								<tr>
									{#each headers as title, i}
										<th class="w-1/4 px-12 py-4 text-lg font-bold text-gray-900"> {title} </th>
									{/each}
								</tr>
							</thead>
							<tbody class="text-gray-900">
								{#each users as row}
									<tr class=" odd:bg-gray-50 text-center">
										<td class=" whitespace-nowrap px-6 py-4 text-center">
											<div class="m-auto  items-center justify-center flex ">
												{row.name}
											</div>
										</td>
										<td class=" whitespace-nowrap px-6 py-4 text-center">
											<div class="m-auto  items-center justify-center flex ">
												{#each row.socials as social}
													<img src={'/' + social.name + '.png'} class="w-6 h-6 mr-1" />
												{/each}
											</div>
										</td>
										<td class=" whitespace-nowrap px-6 py-4 text-center">
											<div class="m-auto  items-center justify-center flex ">
												{row.rating}

												<img src={'/Star.png'} class="w-4 h-4 ml-1" />
											</div>
										</td>
										<td class=" whitespace-nowrap px-6 py-4 text-center">
											{row.city}
										</td>
										<td class=" whitespace-nowrap px-6 py-4 text-center">
											{row.mail}
										</td>

										<td class=" whitespace-nowrap px-6 py-4 text-center">
											<div class="m-auto  items-center justify-center flex ">
												<button
													on:click={() => acceptInflu()}
													class="rounded p-1 px-2 text-white shadow border flex font-bold"
													style="background-color: #7CE6D7;"
													><img src="/correct.svg" class="w-6 h-6 mr-1" />Potwierdź</button
												>
											</div>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
