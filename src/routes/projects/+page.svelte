<script lang="ts">
  import { BRAND_NAME, PRIMARY_NAME } from "$lib/data/brand";
  import { ExternalLink, Calendar, Tag } from "lucide-svelte";
  import { ProjectData, projects } from "$lib/data/projects";

  import View from "$lib/components/ui/View.svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import svelteTilt from "vanilla-tilt-svelte";

  import { type TextFunction } from "$lib/stores/language";
  import { getContext } from "svelte";
  import { about } from "$lib/data/about";

  let text = getContext<TextFunction>("text");
</script>

<svelte:head>
  <title>Nos Réalisations | {BRAND_NAME}</title>
  <meta
    name="description"
    content="Découvrez nos projets web et applications créés avec passion et expertise."
  />
</svelte:head>

<div class="projects-page">
  <View align="column">
    <div class="hero-section">
      <h1 data-aos="fade-up" data-aos-duration="800">
        {text(ProjectData.title)}
        {PRIMARY_NAME}
      </h1>
      <p data-aos="fade-up" data-aos-duration="800">
        {text(ProjectData.description)}
      </p>
    </div>

    <div class="projects-grid" data-aos="fade-up" data-aos-duration="800">
      {#each projects as project, index}
        <div
          class="card-wrapper"
          use:svelteTilt={{
            max: 10,
            glare: true,
          }}
        >
          <article
            class="card"
            data-aos="fade-up"
            data-aos-delay={100 * index}
            data-aos-duration="800"
          >
            <div class="card-image">
              <img src={project.image} alt={text(project.title)} />
              <div class="card-overlay">
                <Button variant="primary" href={project.url} target="_blank">
                  Voir le projet
                </Button>
              </div>
            </div>

            <div class="card-content">
              <div class="card-header">
                <h3>{text(project.title)}</h3>
              </div>

              <p class="card-description">
                {text(project.description)}
              </p>

              <div class="card-tags">
                {#each project.tags as tag}
                  <span class="tag">
                    <Tag size={12} />
                    {tag}
                  </span>
                {/each}
              </div>

              <div class="card-footer">
                <Button
                  variant="outline"
                  href={project.url}
                  Icon={ExternalLink}
                  target="_blank"
                >
                  Visiter
                </Button>
              </div>
            </div>
          </article>
        </div>
      {/each}
    </div>

    <div class="cta-section" data-aos="fade-up" data-aos-duration="800">
      <div class="cta-content">
        <h2>{text(about.cta.title)}</h2>
        <p>
          {text(about.cta.description)}
        </p>
        <Button variant="primary" href="/contact">
          {text(about.cta.action)}
        </Button>
      </div>
    </div>
  </View>
</div>

<style>
  .projects-page {
    min-height: 100vh;
    padding-top: calc(var(--header-height) + 2rem);
    padding-bottom: 4rem;
  }

  .hero-section {
    text-align: center;
    margin-bottom: 4rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-section h1 {
    font-size: clamp(2.5rem, 8vw, 4rem);
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    font-family: var(--font-secondary);
  }

  .hero-section p {
    font-size: 1.125rem;
    color: var(--text-light);
    line-height: 1.7;
    max-width: 600px;
    margin: 0 auto;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 1200px) {
    .projects-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 767px) {
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  .card-wrapper {
    transition: none;
  }

  .card {
    background: var(--background-color);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    overflow: hidden;
    transition: var(--transition);
    box-shadow: var(--shadow-light);
    position: relative;
    width: 100%;
    max-width: 100%;
  }

  .card:hover {
    box-shadow: var(--shadow-medium);
    transform: translateY(-4px);
  }

  .card-image {
    position: relative;
    height: 292px;
    overflow: hidden;
  }

  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
  }

  .card:hover .card-image img {
    transform: scale(1.05);
  }

  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 62, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition);
  }

  .card:hover .card-overlay {
    opacity: 1;
  }

  @media (max-width: 768px) {
    .card-overlay {
      opacity: 0.95;
      background: rgba(0, 0, 62, 0.9);
    }

    .card:hover .card-overlay {
      opacity: 1;
    }
  }

  .card-content {
    padding: 1.5rem;
  }

  .card-header {
    margin-bottom: 1rem;
  }

  .card-header h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 0.5rem;
  }

  .card-description {
    color: var(--text-light);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }

  .card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    background: var(--background-light);
    color: var(--text-light);
    padding: 0.25rem 0.75rem;
    border-radius: calc(var(--border-radius) * 2);
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid var(--border-light);
  }

  .card-footer {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 480px) {
    .card-footer {
      justify-content: stretch;
    }

    .card-footer :global(.button) {
      width: 100%;
      text-align: center;
    }
  }

  .cta-section {
    background: var(--background-light);
    border-radius: var(--border-radius);
    padding: 3rem 2rem;
    text-align: center;
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-light);
  }

  .cta-content h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-color);
  }

  .cta-content p {
    font-size: 1.125rem;
    color: var(--text-light);
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    .projects-page {
      padding-top: calc(var(--header-height) + 1rem);
      padding-bottom: 2rem;
    }

    .hero-section {
      margin-bottom: 2.5rem;
      padding: 0 0.5rem;
    }

    .hero-section h1 {
      font-size: 2.5rem;
    }

    .hero-section p {
      font-size: 1rem;
    }

    .cta-section {
      padding: 2rem 1.5rem;
    }

    .cta-content h2 {
      font-size: 1.5rem;
    }

    .card-content {
      padding: 1.25rem;
    }

    .card-tags {
      gap: 0.375rem;
    }

    .tag {
      font-size: 0.7rem;
      padding: 0.2rem 0.6rem;
    }

    .card-footer {
      margin-top: 1rem;
    }
  }

  @media (max-width: 480px) {
    .hero-section h1 {
      font-size: 2rem;
    }

    .card-image {
      height: 200px;
    }

    .projects-grid {
      gap: 1rem;
    }

    .card-content {
      padding: 1rem;
    }

    .cta-section {
      padding: 1.5rem 1rem;
    }
  }
</style>
