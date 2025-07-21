<script lang="ts">
	import { companies, CompaniesSection } from '$lib/data/companies';

	import { type TextFunction } from '$lib/stores/language';
	import { getContext } from 'svelte';
	import View from '$lib/components/ui/View.svelte';
	import CompanyCard from './CompanyCard.svelte';

	let text = getContext<TextFunction>('text');
</script>

<View align="column" maxWidth="var(--hero-width)">
	<div class="section" id="companies">
		<div class="header">
			<h2 data-aos="fade-up" data-aos-duration="800">
				{text(CompaniesSection.title)}
			</h2>
		</div>

		<div class="companies">
			{#each companies as company, i}
				<CompanyCard
					name={company.name}
					title={text(company.description)}
					image={company.image}
					color={company.color}
					url={company.url}
					index={i}
				/>
			{/each}
		</div>
	</div>
</View>

<style>
	.section {
		padding: 4rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.header {
		max-width: 800px;
	}

	.header h2 {
		font-size: clamp(2.5rem, 6vw, 3.5rem);
		font-weight: 600;
		margin-bottom: 1.5rem;
		color: var(--text-color);
		font-family: var(--font-secondary);
	}

	.companies {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		justify-content: center;
	}

	@media (max-width: 768px) {
		.section {
			padding: 3rem 0;
		}

		.header {
			margin-bottom: 3rem;
		}

		.header h2 {
			font-size: 2.5rem;
		}

		.companies {
			gap: 1.5rem;
		}
	}
</style>
