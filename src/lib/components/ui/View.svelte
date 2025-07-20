<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
		align?: 'row' | 'column' | 'default';
		center?: boolean;
		screen?: boolean;
		[key: string]: any; // Allow other attributes
		maxWidth?: string; // Optional max-width prop
	}

	let {
		children,
		align = 'default',
		center = false,
		screen = false,
		maxWidth = 'var(--view-width)',
		...rest
	}: Props = $props();
</script>

<div
	class="view"
	class:center
	class:screen
	data-align={align}
	{...rest}
	style="max-width: {maxWidth}"
>
	{@render children?.()}
</div>

<style>
	/* Layout utilities */
	.view {
		width: 100%;
		margin: 0 auto;
		padding: 0 24px;
		height: 100%;

		transition: height var(--transition-duration) var(--transition-easing);
	}

	@media (max-width: 768px) {
		.view {
			padding: 0 20px;
		}
	}
	div[data-align] {
		display: flex;
	}

	div[data-align='row'] {
		flex-direction: row;
	}

	div[data-align='column'] {
		flex-direction: column;
	}
	.center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.screen {
		min-height: calc(100vh - var(--header-height));
	}
</style>
