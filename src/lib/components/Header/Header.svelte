<script lang="ts">
	import { BRAND_NAME } from '$lib/data/brand';
	import MobileMenu from '../Mobile/Menu.svelte';
	import NavigationBar from './NavigationBar/NavigationBar.svelte';
	import Notification from './Notification/Notification.svelte';

	import { getContext } from 'svelte';
	import { type TextFunction } from '$lib/stores/language';
	let text = getContext<TextFunction>('text');
</script>

<MobileMenu />

<header>
	<Notification
		message={text({
			en: 'Explore our latest features and updates.',
			fr: 'Découvrez nos dernières fonctionnalités et mises à jour.'
		})}
	/>

	<NavigationBar />
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 1000;

		width: 100%;
		height: var(--header-height);
	}
</style>
