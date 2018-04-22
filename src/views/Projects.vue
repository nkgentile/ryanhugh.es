<template>
  <main>
    <app-navigation/>
    <projects-grid/>
  </main>
</template>

<script>
  import AppNavigation from '@/components/AppNavigation';
  import ProjectsGrid from '@/components/ProjectsGrid';

  export default {
    name: 'Projects',

    components: {
      AppNavigation,
      ProjectsGrid,
    },
  };
</script>

<style module>
</style>
