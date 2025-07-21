<script lang="ts">
	import ThemeButton from '$lib/components/ui/ThemeButton.svelte';
	import Hamburger from '$lib/components/ui/Hamburger.svelte';
	import Links from './Links.svelte';
	import View from '$lib/components/ui/View.svelte';
	import Logo from '$lib/components/Logos/Logo.svelte';

	import { navigation } from '$lib/data/navigation';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
</script>

<nav>
	<View align="row" maxWidth="var(--nav-width)">
		<div class="stretch">
			<div class="wrapper">
				<a class="image" href="/">
					<Logo />
				</a>
			</div>

			<div class="wrapper desktop">
				<Links links={navigation} />
			</div>

			<div class="wrapper desktop">
				<div class="controls">
					<ThemeButton />
					<LanguageSwitcher />
				</div>
			</div>

			<div class="mobile">
				<div class="controls">
					<ThemeButton />
					<LanguageSwitcher />
				</div>
				<Hamburger />
			</div>
		</div>
	</View>
</nav>

<style lang="scss">
	:root {
		--border-size: 1px;
	}

	.image {
		width: calc(0.6 * var(--navbar-height));
		height: calc(0.6 * var(--navbar-height));
		display: flex;
		align-items: center;
		justify-content: center;

		transition: all var(--transition-duration) var(--transition-easing);
	}

	.stretch {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	nav {
		width: 100%;
		height: var(--navbar-height);

		display: flex;
		align-items: center;
		justify-content: space-between;

		border-bottom: 1px solid var(--border-color);
		background-color: color-mix(in srgb, var(--background-color) 50%, transparent);
		backdrop-filter: blur(10px);

		transition: all var(--transition-duration) var(--transition-easing);
	}

	.wrapper {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.mobile {
		display: none;
	}

	@media (max-width: 768px) {
		.wrapper.desktop {
			display: none;
		}

		.mobile {
			display: flex;
			align-items: center;
			gap: 1rem;
		}
	}
</style>
