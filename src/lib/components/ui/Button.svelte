<script lang="ts">
  import type { Icon as IconType } from "lucide-svelte";

  interface Props {
    children?: import("svelte").Snippet;
    variant?: "primary" | "secondary" | "outline";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onclick?: () => void;
    content?: import("svelte").Snippet;
    href?: string;
    target?: "_blank" | "";
    fullWidth?: boolean;
    Icon?: any;
    iconPosition?: "left" | "right";
  }

  let {
    children,
    variant = "primary",
    type = "button",
    disabled = false,
    onclick = () => {},
    content,
    href = "",
    fullWidth = false,
    Icon,
    iconPosition = "left",
    target = "",
  }: Props = $props();
</script>

{#if href}
  <a class="button btn-{variant}" {href} {type} {target} class:full={fullWidth}>
    {#if Icon && iconPosition === "left"}
      <Icon size={18}></Icon>
    {/if}

    {#if content}
      {content()}
    {:else}
      {@render children?.()}
    {/if}

    {#if Icon && iconPosition === "right"}
      <Icon size={18}></Icon>
    {/if}
  </a>
{:else}
  <button
    class="button btn-{variant}"
    {type}
    {disabled}
    {onclick}
    class:full={fullWidth}
  >
    {#if Icon && iconPosition === "left"}
      <Icon size={18}></Icon>
    {/if}

    {#if content}
      {content()}
    {:else}
      {@render children?.()}
    {/if}

    {#if Icon && iconPosition === "right"}
      <Icon size={18}></Icon>
    {/if}
  </button>
{/if}

<style lang="scss">
  .button {
    padding: 16px 32px;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    min-height: 48px;
    font-family: var(--font-primary);

    display: flex;
    gap: 0.5rem;
  }

  .button.full {
    width: 100%;
  }

  .button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .btn-primary {
    background: var(--text-color);
    color: var(--background-color);
    border-color: var(--text-color);
  }

  .btn-primary:hover:not(:disabled) {
    background: var(--primary-hover);
    border-color: var(--primary-hover);
  }

  .btn-secondary {
    background: var(--background-color);
    color: var(--text-color);
    border-color: var(--border-color);
  }

  .btn-secondary:hover:not(:disabled) {
    border-color: var(--text-color);
  }

  .btn-outline {
    background: transparent;
    border: 1px solid var(--text-color);
    color: var(--text-color);
  }

  .btn-outline:hover:not(:disabled) {
    box-shadow: var(--shadow-heavy);
  }

  @media (max-width: 768px) {
    .button {
      padding: 14px 28px;
      font-size: 13px;
    }
  }
</style>
