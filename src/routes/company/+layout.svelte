<script>
	const logoSrc = '/logo.svg';
	const imageSocial = '/imageSocial.svg';
	const Mail = '/Mail.svg';
	const Billboard = '/Billboard.svg';
	const Monitor = '/Monitor.svg';
	const accountIcon = '/account.svg';
</script>

<div
	style="height: 100vh;"
	class=" flex flex-col p-2 md:w-1/5 sm:w-1/4 w-1/4 min-w-[150px] overflow-y-auto text-center  sideBarContainer  sticky top-0 "
>
	<div class="flex items-center justify-center">
		<img src={logoSrc} alt="logo" />
	</div>
	<div class="my-2 bg-white h-[5px] w-full " />
	<div
		class="my-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
	>
		<a href="#" class="flex flex-row">
			<img class="w-5 h-5 mt-0.5" src={Mail} alt="mail" />
			<span class="text-l ml-1 text-gray-200 font-bold">Wiadomości</span>
		</a>
	</div>
	<div
		class="my-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
	>
		<a href="#" class="flex flex-row">
			<img class="w-5 h-5 mt-0.5" src={Billboard} alt="Billboard" />
			<span class="text-l ml-1 text-gray-200 font-bold">Moje posty</span>
		</a>
	</div>
	<div
		class="my-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
	>
		<a href="/company/posts" class="flex flex-row">
			<img class="w-5 h-5 mt-0.5" src={Monitor} alt="Billboard" />
			<span class="text-l ml-1 text-gray-200 font-bold">Wszystkie posty</span>
		</a>
	</div>
	<div class="my-4 bg-gray-600 h-[1px]" />
	<div
		class="my-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
	>
		<i class="bi bi-bookmark-fill" />
		<span class="text-l ml-1 text-gray-200 font-bold">FAQ</span>
	</div>
	<img class="absolute inset-x-0 bottom-0" src={imageSocial} alt="aaa" />
</div>

<div class="absolute right-0 top-0">
	<img src={accountIcon} class="h-16 w-16" alt="aaa" />
</div>

<slot />

<style>
	.sideBarContainer {
		background-color: #002055;
	}
</style>
