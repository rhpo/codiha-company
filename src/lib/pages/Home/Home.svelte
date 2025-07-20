<script lang="ts">
	import Hero from './Hero/Hero.svelte';

	import { BRAND_NAME, BRAND_SLOGAN } from '$lib/data/brand';
	import View from '$lib/components/ui/View.svelte';
	import Cta from '$lib/components/ui/Cta.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	import { type TextFunction } from '$lib/stores/language';
	import { getContext } from 'svelte';
	import Companies from './Companies/Companies.svelte';

	let text = getContext<TextFunction>('text');
</script>

<svelte:head>
	<title>{BRAND_NAME} | {text(BRAND_SLOGAN)}</title>
	<meta
		name="description"
		content={text({
			en: 'Discover ' + BRAND_NAME + ', your partner in digital innovation.',
			fr: 'Découvrez ' + BRAND_NAME + ', votre partenaire en innovation digitale.'
		})}
	/>
</svelte:head>

<Hero />

<Companies />

<View align="column">
	<Cta
		title={text({
			en: 'Have any questions or ideas?',
			fr: 'Vous avez des questions ou des idées ?'
		})}
		description={text({
			en: 'We are here to help you with your digital projects.',
			fr: 'Nous sommes là pour vous aider dans vos projets digitaux.'
		})}
	>
		<Button variant="outline" href="/projects"
			>{text({
				en: 'Contact us',
				fr: 'Contactez-nous'
			})}</Button
		>
	</Cta>
</View>

<style>
</style>
