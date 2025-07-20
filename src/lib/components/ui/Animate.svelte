<script lang="ts">
	let {
		animation = 'fade',
		duration = 800,
		delay = 0,
		once = false,
		children
	}: {
		animation: string;
		duration?: Number;
		delay?: Number;
		once?: boolean;
		children?: any;
	} = $props();
</script>

<div
	data-aos={animation}
	data-aos-duration={duration}
	data-aos-delay={delay}
	data-aos-once={once ? 'true' : 'false'}
>
	{#if children}
		{@render children?.()}
	{/if}
</div>
