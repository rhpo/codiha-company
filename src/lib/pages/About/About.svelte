<script lang="ts">
	import View from '$lib/components/ui/View.svelte';
	import Cta from '$lib/components/ui/Cta.svelte';

	import Info from './Info.svelte';

	import { type TextFunction } from '$lib/stores/language';
	import { getContext } from 'svelte';

	let text = getContext<TextFunction>('text');
</script>

<View align="column">
	<main>
		<Info />
	</main>
</View>

<style>
	main {
		padding-top: 10rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5rem;

		width: 100%;
		height: 100%;
	}
</style>
