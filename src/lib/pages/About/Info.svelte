<script lang="ts">
  import { about } from "$lib/data/about";

  import { type TextFunction } from "$lib/stores/language";
  import { getContext } from "svelte";

  let text = getContext<TextFunction>("text");
</script>

<div class="header">
  <h2 data-aos="fade-up" data-aos-duration="800">
    {text(about.title)}
  </h2>
  <p class="subtitle" data-aos="fade-up" data-aos-duration="800">
    {text(about.subtitle)}
  </p>
  <p class="description" data-aos="fade-up" data-aos-duration="800">
    {text(about.description)}
  </p>
</div>

<style>
  .header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .header h2 {
    font-size: clamp(2.5rem, 6vw, 3.5rem);
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    font-family: var(--font-secondary);
  }

  .subtitle {
    font-size: 1.25rem;
    color: var(--text-light);
    margin-bottom: 2rem;
    font-weight: 500;
  }

  .description {
    font-size: 1.125rem;
    color: var(--text-light);
    line-height: 1.7;
    max-width: 700px;
    margin: 0 auto;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 5rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .stat-card {
    text-align: center;
    background: var(--background-light);
    padding: 2rem 1rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-light);
    transition: var(--transition);
  }

  .stat-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-medium);
  }

  .stat-number {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 0.5rem;
    font-family: var(--font-secondary);
  }

  .stat-label {
    font-size: 1rem;
    color: var(--text-light);
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .header {
      margin-bottom: 3rem;
    }

    .header h2 {
      font-size: 2.5rem;
    }

    .subtitle {
      font-size: 1.125rem;
    }

    .description {
      font-size: 1rem;
    }

    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .stat-card {
      padding: 1.5rem 1rem;
    }

    .stat-number {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 480px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }

    .stat-card {
      padding: 1.25rem 1rem;
    }
  }
</style>
