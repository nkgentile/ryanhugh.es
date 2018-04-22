<template>
  <article>
    <app-navigation :class="$style.navigation"/>
    <showcase-projects/>
  </article>
</template>

<script>
  import AppNavigation from '@/components/AppNavigation';
  import ShowcaseProjects from '@/components/ShowcaseProjects';
  
  export default {
    components: {
      AppNavigation,
      ShowcaseProjects,
    },
  };
</script>

<style module>
  .navigation {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: auto;

    z-index: 1;

    color: white;
  }
</style>
