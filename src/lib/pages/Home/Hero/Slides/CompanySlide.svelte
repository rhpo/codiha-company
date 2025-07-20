<script lang="ts">
	import type { Company } from '$lib/data/companies';

	interface Props {
		company: Company;
	}

	let { company }: Props = $props();

	function getRandomImage() {
		return `https://picsum.photos/seed/${Math.random()}/800/600`;
	}

	import { getContext } from 'svelte';
	import { type TextFunction } from '$lib/stores/language';
	import View from '$lib/components/ui/View.svelte';
	import { BRAND_NAME } from '$lib/data/brand';
	let text = getContext<TextFunction>('text');
</script>

<main>
	<div class="background">
		<div class="image-wrapper">
			<img src={company.cover} alt="Random background" />
		</div>
	</div>

	<View align="column" maxWidth="var(--hero-width)">
		<div class="content">
			<h1>
				The {BRAND_NAME}
				{company.name}
			</h1>
			<p>
				{text(company.details)}
			</p>
		</div>
	</View>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
		position: relative;
		background-color: black;
	}

	.background {
		display: flex;
		width: 100%;
		height: 100%; /* Fill parent main */

		position: absolute;
		top: 0;
		left: 0;
		z-index: 0; /* Background behind content */
		overflow: hidden; /* Hide overflow from images */
		opacity: 0.7;
	}

	.image-wrapper {
		flex: 1; /* Each wrapper takes equal space */
		height: 100%;
	}

	.image-wrapper img {
		width: 100%;
		height: 100%;
		object-fit: cover; /* Stretch to fill without maintaining aspect ratio */
		display: block; /* Remove any inline spacing */
	}

	.content {
		z-index: 1; /* Ensure content is above background */
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: 100%;

		color: white;
	}

	h1 {
		font-size: 4rem;
		margin-top: 20px;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2.5rem; /* Adjust for smaller screens */
		}

		.background {
			flex-direction: column; /* Stack images vertically on smaller screens */
		}
	}
</style>
