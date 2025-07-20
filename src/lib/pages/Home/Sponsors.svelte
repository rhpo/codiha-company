<script lang="ts">
  import View from "$lib/components/ui/View.svelte";
  import { SponsorData, sponsors } from "$lib/data/sponsors";

  import { type TextFunction } from "$lib/stores/language";
  import { getContext } from "svelte";

  let text = getContext<TextFunction>("text");
</script>

<View align="column">
  <div class="section">
    <div class="header">
      <h2 data-aos="fade-up" data-aos-duration="800">
        {text(SponsorData.title)}
      </h2>
      <p data-aos="fade-up" data-aos-duration="800">
        {text(SponsorData.description)}
      </p>
    </div>

    <div class="grid" data-aos="fade-up" data-aos-duration="800">
      {#each sponsors as sponsor, index}
        <div
          class="sponsor-card"
          data-aos="zoom-in"
          data-aos-delay={50 * index}
          data-aos-duration="600"
        >
          <a
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            class="sponsor-link"
          >
            <div class="sponsor-logo">
              <img src={sponsor.logo} alt="{sponsor.name} logo" />
            </div>
            <span class="sponsor-name">{sponsor.name}</span>
          </a>
        </div>
      {/each}
    </div>
  </div>
</View>

<style>
  .section {
    padding: 4rem 0;
    text-align: center;
  }

  .header {
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .header h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    font-family: var(--font-secondary);
  }

  .header p {
    font-size: 1.125rem;
    color: var(--text-light);
    line-height: 1.6;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
    max-width: 800px;

    margin-inline: auto; /* shorthand for left/right auto */
    justify-items: center; /* centers content inside each column */
  }

  @media (min-width: 1200px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 767px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }

  .sponsor-card {
    background: var(--background-color);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius);
    padding: 2rem 1rem;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
  }

  .sponsor-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  .sponsor-card:hover::before {
    left: 100%;
  }

  .sponsor-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-medium);
    border-color: var(--border-color);
  }

  .sponsor-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: inherit;
    height: 100%;
    min-height: 100px;
    justify-content: center;
  }

  .sponsor-logo {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .sponsor-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: grayscale(100%) opacity(0.7);
    transition: var(--transition);
  }

  .sponsor-card:hover .sponsor-logo img {
    filter: grayscale(0%) opacity(1);
    transform: scale(1.1);
  }

  .sponsor-name {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-light);
    transition: var(--transition);
    text-align: center;
  }

  .sponsor-card:hover .sponsor-name {
    color: var(--text-color);
  }

  @media (max-width: 768px) {
    .section {
      padding: 3rem 0;
    }

    .header {
      margin-bottom: 2rem;
    }

    .header h2 {
      font-size: 2rem;
    }

    .header p {
      font-size: 1rem;
    }

    .sponsor-card {
      padding: 1.5rem 0.75rem;
    }

    .sponsor-logo {
      width: 50px;
      height: 50px;
      margin-bottom: 0.75rem;
    }

    .sponsor-name {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    .sponsor-card {
      padding: 1rem 0.5rem;
    }

    .sponsor-logo {
      width: 40px;
      height: 40px;
      margin-bottom: 0.5rem;
    }

    .sponsor-name {
      font-size: 0.75rem;
    }
  }

  /* Dark mode adjustments */
  :global(html.dark) .sponsor-logo img {
    filter: grayscale(100%) opacity(0.8) brightness(1.2) invert();
  }

  :global(html.dark) .sponsor-card:hover .sponsor-logo img {
    filter: grayscale(100%) opacity(1) brightness(1) invert();
  }
</style>
