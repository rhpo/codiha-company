<script lang="ts">
  import "../app.css";
  import "aos/dist/aos.css";

  import AOS from "aos";

  import ButtonFloat from "$lib/components/ui/ButtonFloat.svelte";
  import MobileMenu from "$lib/components/Mobile/Menu.svelte";
  import Header from "$lib/components/Header/Header.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";

  import { mobileMenuOpen } from "$lib/stores/menu";
  import { isFormOpen } from "$lib/stores/form";
  import { MessageCircle } from "lucide-svelte";
  import { onMount, setContext } from "svelte";

  import PageTransition from "$lib/components/ui/PageTransition.svelte";
  import { goto } from "$app/navigation";
  import { language } from "$lib/stores/language";

  let {
    children,
    data,
  }: {
    children?: () => any;
    data: {
      url: string;
    };
  } = $props();

  let noScroll = $state(false);

  $effect(() => {
    noScroll = $mobileMenuOpen || $isFormOpen;
    document.documentElement.classList.toggle("no-scroll", noScroll);
  });

  $effect(() => {
    AOS.init({
      duration: 800,
    });
  });

  onMount(() => {
    window.addEventListener("scroll", () => {
      const progress =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty(
        "--progress",
        progress.toString()
      );
    });
  });

  setContext("text", function text(name: { fr: string; en: string }) {
    return $language.code === "fr" ? name.fr : name.en;
  });
</script>

<main data-aos="fade-in" data-aos-duration="1500">
  <Header />

  <div class="screen">
    <div class="content">
      <PageTransition key={data.url}>
        {@render children?.()}
      </PageTransition>

      <Footer />
    </div>
  </div>
</main>

<MobileMenu />
<ButtonFloat
  Icon={MessageCircle}
  tip="Contactez-nous!"
  onClick={() => goto("/contact")}
/>

<style>
  main {
    display: flex;
    flex-direction: column;
    min-height: 100svh;
  }

  :global(html.no-scroll) {
    overflow: hidden;
  }

  .screen {
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 100%;
    height: 100%;
  }

  .content {
    width: 100%;
    min-height: calc(100svh - var(--header-height));

    box-sizing: border-box;
  }

  :global(html.no-scroll) {
    overflow: hidden;
  }
</style>
