<script lang="ts">
  import { fade as animation } from "svelte/transition";

  export let key: string;
  export let duration: number = 300;
</script>

{#key key}
  <main
    in:animation={{ duration, delay: duration }}
    out:animation={{ duration }}
  >
    <slot />
  </main>
{/key}

<style>
  main {
    inset: 0;
  }
</style>
