<script lang="ts">
	import { BRAND_NAME } from '$lib/data/brand';
	import About from '$lib/pages/About/About.svelte';

	import { type TextFunction } from '$lib/stores/language';
	import { getContext } from 'svelte';

	let text = getContext<TextFunction>('text');
</script>

<svelte:head>
	<title
		>{text({
			en: 'About Us',
			fr: 'À propos de nous'
		})} - {BRAND_NAME}</title
	>
	<meta
		name="description"
		content={text({
			en: `Learn more about ${BRAND_NAME}, our values, technologies, and how we can help you achieve your digital goals.`,
			fr: `Découvrez ${BRAND_NAME}, nos valeurs, nos technologies et comment nous pouvons vous aider à atteindre vos objectifs numériques.`
		})}
	/>
</svelte:head>

<About />
