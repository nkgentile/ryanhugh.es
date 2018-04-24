<template>
  <article-template>
    <main>
      <projects-grid/>
    </main>
  </article-template>
</template>

<script>
  import ArticleTemplate from '@/templates/Article';
  import ProjectsGrid from '@/components/ProjectsGrid';

  export default {
    name: 'Projects',

    components: {
      ArticleTemplate,
      ProjectsGrid,
    },
  };
</script>

<style module>
</style>
