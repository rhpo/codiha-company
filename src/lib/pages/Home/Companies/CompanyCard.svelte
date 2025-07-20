<script lang="ts">
	let {
		image = 'https://picsum.photos/400/300',
		name = 'VISIT GE VERNOVA',
		title = 'The energy to change the world',
		color,
		url,
		index = 0
	} = $props();

	import { getContext } from 'svelte';
	import { type TextFunction } from '$lib/stores/language';
	import Logo from '$lib/components/Logos/Logo.svelte';
	let text = getContext<TextFunction>('text');
</script>

<a
	class="card"
	href={url}
	target="_blank"
	rel="noopener noreferrer"
	data-aos="flip-right"
	data-aos-duration="800"
	data-aos-delay={index * 200}
>
	<main style="background-color: {color || '#f0f0f0'}; background-image: url({image}); ">
		<div class="content" style="background-color: {color || '#f0f0f0'};">
			<h2 class="title">{title}</h2>
			<span class="link">
				<div class="logo">
					<Logo animated fill="white" />
				</div>
				{text({
					en: 'Visit',
					fr: 'Visiter'
				})}
				{name}
			</span>
		</div>
	</main>
</a>

<style>
	.card,
	.card:hover {
		text-decoration: none;
		color: inherit;
	}

	.card {
		display: block;
		transition: all var(--transition-duration) var(--transition-easing);
	}

	.card:hover {
		transform: scale(1.05) translateY(-10px);
	}

	main {
		position: relative;
		width: 100%;
		width: 380px;
		height: 400px;
		overflow: hidden;
		background: #fff;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;

		background-size: 400px 72%;
		background-position: center;
		background-repeat: no-repeat;
		background-position: 0 0;
	}

	.content {
		color: white;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 24px;
		min-height: 32.5%;
		width: 85%;
	}

	.title {
		font-size: 1.3rem;
		font-weight: 300;
		line-height: 1.3;
		margin: 0;
		color: white;
	}

	.link {
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		word-spacing: 0.15em;
		letter-spacing: 0.05em;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.link .logo {
		width: 1rem;
		height: 1rem;
	}

	.link,
	.link:hover {
		text-decoration: none;
		color: white;
	}

	/* Responsive adjustments */
	@media (max-width: 460px) {
		.card,
		main {
			width: 100%;
		}

		.content {
			padding: 24px 20px;
			min-height: 140px;
		}

		.title {
			font-size: 1.3rem;
		}
	}
</style>
