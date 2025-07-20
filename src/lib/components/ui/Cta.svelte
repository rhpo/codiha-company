<script lang="ts">
  let {
    title = "Prêt à travailler ensemble ?",
    description = "Découvrons comment nous pouvons transformer vos idées en réalité digitale.",
    children,
  }: {
    title: string;
    description: string;
    children?: any;
  } = $props();
</script>

<main data-aos="fade-up" data-aos-duration="800">
  <h3>{title}</h3>
  <p>
    {description}
  </p>

  <div>
    {#if children}
      {@render children?.()}
    {/if}
  </div>
</main>

<style>
  main {
    text-align: center;
    background: var(--background-color);
    padding: 3rem 2rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-light);

    width: 100%;
  }

  main h3 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-color);
    font-family: var(--font-secondary);
  }

  main p {
    font-size: 1.125rem;
    color: var(--text-light);
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    main {
      padding: 2rem 1.5rem;
    }

    main h3 {
      font-size: 1.75rem;
    }
  }
</style>
