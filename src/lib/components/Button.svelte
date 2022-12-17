<script>
	import { createEventDispatcher } from "svelte";


	const dispatch = createEventDispatcher();

	function click() {
		dispatch('clicked', {});
	}
</script>

<button
	on:click={click}
	class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
	<slot />
</button>
