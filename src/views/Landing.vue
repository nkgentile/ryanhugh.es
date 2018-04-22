<template>
  <article :class="$style.container">
    <header :class="$style.navigation">
      <app-navigation/>
    </header>

    <main :class="$style.showcase">
      <project-showcase/>
    </main>
  </article>
</template>

<script>
  import AppNavigation from '@/components/AppNavigation';
  import ProjectShowcase from '@/components/ShowcaseProjects';

  export default {
    name: 'Home',

    components: {
      AppNavigation,
      ProjectShowcase,
    },
  }
</script>

<style module>
  .container {
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-rows: 1fr;
  }

  .navigation {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;

    width: 100%;

    color: white;
  }

  .showcase {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    overflow: hidden;
  }
</style>
