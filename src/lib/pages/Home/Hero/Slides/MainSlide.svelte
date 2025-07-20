<script lang="ts">
	function getRandomImage() {
		return `https://picsum.photos/seed/${Math.random()}/1200/1800`;
	}

	import { getContext } from 'svelte';
	import { type TextFunction } from '$lib/stores/language';
	import View from '$lib/components/ui/View.svelte';
	let text = getContext<TextFunction>('text');
</script>

<main>
	<div class="background">
		<div class="image-wrapper">
			<img src={'/hero/1.jpg'} alt="Random background" />
		</div>
		<div class="image-wrapper">
			<img src={'/hero/2.jpg'} alt="Random background" />
		</div>
		<div class="image-wrapper">
			<img src={'/hero/3.jpg'} alt="Random background" />
		</div>
	</div>

	<View align="column" maxWidth="var(--hero-width)">
		<div class="content">
			<h1 data-aos="fade-up" data-aos-duration="1000">
				{text({
					en: 'CODIHA - Once, Now, Forever',
					fr: 'CODIHA - Autrefois, Maintenant, Toujours'
				})}
			</h1>
		</div>
	</View>
</main>

<style>
	main {
		text-align: center;
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
	}

	h1 {
		font-size: 4rem;
		color: white;
		margin-top: 20px;
		text-align: left;
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
