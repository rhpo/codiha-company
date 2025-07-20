<script>
  import Button from "$lib/components/ui/Button.svelte";
  import { Users, Heart, Target, Zap } from "lucide-svelte";
</script>

<div class="team-highlight" data-aos="fade-up" data-aos-duration="800">
  <div class="team-content">
    <div class="team-text">
      <h3>Une équipe à votre écoute</h3>
      <p>
        Composée de développeurs full-stack, de designers UX/UI et de chefs de
        projet expérimentés, notre équipe multidisciplinaire met son expertise
        au service de vos ambitions digitales.
      </p>
      <div class="team-features">
        <div class="feature">
          <Users size={20} />
          <span>Équipe multidisciplinaire</span>
        </div>
        <div class="feature">
          <Heart size={20} />
          <span>Passion pour l'innovation</span>
        </div>
        <div class="feature">
          <Target size={20} />
          <span>Objectifs centrés client</span>
        </div>
        <div class="feature">
          <Zap size={20} />
          <span>Réactivité garantie</span>
        </div>
      </div>
      <Button variant="primary" href="/contact">Parlons de votre projet</Button>
    </div>
    <div class="team-visual">
      <div class="team-avatar-group">
        <div
          class="team-avatar"
          style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
        >
          <span>JD</span>
        </div>
        <div
          class="team-avatar"
          style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);"
        >
          <span>AM</span>
        </div>
        <div
          class="team-avatar"
          style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);"
        >
          <span>SK</span>
        </div>
        <div
          class="team-avatar"
          style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);"
        >
          <span>LM</span>
        </div>
        <div class="team-avatar plus">
          <span>+</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .team-highlight {
    background: var(--background-light);
    border-radius: var(--border-radius);
    padding: 3rem;
    margin-bottom: 4rem;
    border: 1px solid var(--border-light);
  }

  .team-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .team-text h3 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    font-family: var(--font-secondary);
  }

  .team-text p {
    font-size: 1.125rem;
    color: var(--text-light);
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .team-features {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .feature {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-light);
    font-size: 0.95rem;
  }

  .team-visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .team-avatar-group {
    display: flex;
    align-items: center;
    gap: -0.5rem;
  }

  .team-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    border: 3px solid var(--background-color);
    margin-left: -0.5rem;
    transition: var(--transition);
  }

  .team-avatar:first-child {
    margin-left: 0;
  }

  .team-avatar:hover {
    transform: scale(1.1) translateY(-4px);
    z-index: 10;
  }

  .team-avatar.plus {
    background: var(--border-color);
    color: var(--text-color);
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .team-highlight {
      padding: 2rem;
      margin-bottom: 3rem;
    }

    .team-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .team-text h3 {
      font-size: 1.75rem;
    }

    .team-text p {
      font-size: 1rem;
    }

    .team-features {
      grid-template-columns: 1fr;
    }

    .team-avatar {
      width: 50px;
      height: 50px;
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .team-avatar {
      width: 45px;
      height: 45px;
      font-size: 0.9rem;
    }
  }
</style>
