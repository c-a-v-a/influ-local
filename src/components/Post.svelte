<script>
	export let company = {
		logosrc: './src/static/starBucksLogo.png',
		city: 'Kraków',
		companyName: 'Starbucks',
		postName: 'Reklamowanie kawiarni “StarBucks”',
		text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		addedDate: '16.12.2022',
		price: '900',
		executionDate: '22.12.2022'
	};
</script>

<div
	class="w-4/6  rounded-lg  border-2 shadow-md m-4 flex flex-col justify-center items-center text-black p-6"
>
	<div class="w-full  flex justify-end items-center">
		<div class="flex justify-center items-center font-light">
			<h1 class="text-lg mr-1">{company.city}</h1>
			<img src="./src/static/cityIcon.svg" class=" w-12 h-12" />
		</div>
	</div>
	<div class="w-full  flex justify-start items-center">
		<div class="flex flex-col justify-center items-center text-sm mr-3">
			<img src={company.logosrc} class=" w-16 h-16" />
			{company.companyName}
		</div>
		<h1 class="text-4xl -mt-4">{company.postName}</h1>
	</div>
	<div class="text-justify font-normal mt-2 flex justify-center items-center">
		<div class="flex flex-col mr-6 text-lg">
			<div class="flex">
				<p class="font-semibold mr-1">Wynagrodzenie:</p>
				{company.price}
			</div>
			<div class="flex">
				<p class="font-semibold mr-1">Data kampanii:</p>
				{company.executionDate}
			</div>
		</div>
		<h1 class="flex-1  text-justify">{company.text}</h1>
	</div>
	<div class="w-full  flex justify-end items-center">
		<div class="flex justify-center items-center font-extralight">
			<h1 class="text-base mr-1 text-justify ">{company.addedDate}</h1>
		</div>
	</div>
	<!-- <div class="w-full h-1/6" />
	<div class="w-full h-3/6 bg-black" />
	<div class="w-full h-1/6" /> -->
</div>
