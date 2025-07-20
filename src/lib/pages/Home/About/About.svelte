<script>
	import View from '$lib/components/ui/View.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Info from '../../About/Info.svelte';
	import Values from './Values.svelte';
	import Cta from '../../../components/ui/Cta.svelte';
</script>

<View align="column">
	<Info />
	<Values />
	<Cta
		title="Prêt à travailler ensemble?"
		description="Découvrons comment nous pouvons transformer vos idées en réalité digitale."
	>
		<Button variant="outline" href="/projects">Voir nos réalisations</Button>
	</Cta>
</View>
