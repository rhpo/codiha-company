<script lang="ts">
	import HeroSlider from '$lib/components/ui/HeroSlider.svelte';
	import { SplideSlide } from '@splidejs/svelte-splide';
	import Main from './Slides/MainSlide.svelte';
	import CompanySlide from './Slides/CompanySlide.svelte';
	import { companies } from '$lib/data/companies';
</script>

<HeroSlider>
	<SplideSlide>
		<Main />
	</SplideSlide>

	{#each companies as company}
		<SplideSlide>
			<CompanySlide {company} />
		</SplideSlide>
	{/each}
</HeroSlider>
