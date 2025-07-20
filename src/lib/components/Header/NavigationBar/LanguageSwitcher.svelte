<script>
  import {
    language,
    toggleLanguage,
    setupLanguage,
  } from "$lib/stores/language";
  import { Languages } from "lucide-svelte";

  $effect(() => {
    setupLanguage();
  });
</script>

<button onclick={toggleLanguage}>
  <Languages size="1.5rem" />
</button>

<style>
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: var(--text-color);
    padding: 0.5rem 1rem;
    transition:
      background-color 0.3s,
      color 0.3s;
  }

  button:hover {
    background-color: var(--hover-bg-color);
    color: var(--hover-text-color);
  }
</style>
