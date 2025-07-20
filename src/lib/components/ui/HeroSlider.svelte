<script lang="ts">
	import { Splide } from '@splidejs/svelte-splide';

	let {
		children,
		options = {
			type: 'loop',
			perPage: 1,
			// autoplay: true,
			interval: 4000,
			arrows: true,
			pagination: true,
			height: 'calc(100vh - var(--header-height))',
			cover: true
		}
	} = $props();
</script>

<main>
	<Splide {options}>
		{@render children?.()}
	</Splide>
</main>

<style>
	main {
		width: 100%;
		height: calc(100vh - var(--header-height));
		overflow: hidden;
	}
</style>
