<template>
  <article-template
    v-if="isNotEmpty(project)"
    :class="$style.container"
  >
    <header :class="$style.header">
      <h1>{{ project.fields.name }}</h1>
    </header>

    <main :class="$style.body">

      <section :class="$style.text">
        <em v-html="markdown(project.fields.introduction)"/>
      </section>

      <project-gallery
        :class="$style.gallery"
        :assets="project.fields.galleryA"
      />

      <section :class="$style.text" v-html="markdown(project.fields.textA)"/>

      <project-gallery
        :class="$style.gallery"
        :assets="project.fields.galleryB"
      />

      <section :class="$style.text" v-html="markdown(project.fields.textB)"/>
      
      <project-gallery
        :class="$style.gallery"
        :assets="project.fields.galleryC"
      />

      <section :class="$style.text" v-html="markdown(project.fields.textC)"/>

    <footer :class="$style.text" v-html="markdown(project.fields.footnotes)"/>

    </main>
  </article-template>
</template>

<script>
  import store from '@/store';

  import {
    createNamespacedHelpers,
  } from 'vuex';

  const {
    mapState,
    mapActions,
  } = createNamespacedHelpers('project');

  import ProjectGallery from '@/components/ProjectGallery';
  import ArticleTemplate from '@/templates/Article';
  import ProjectBreadcrumb from '@/components/ProjectBreadcrumb';

  export default {
    name: 'Project',

    components: {
      ArticleTemplate,
      ProjectGallery,
      ProjectBreadcrumb,
    },

    computed: {
      ...mapState({
        project: 'entry',
      }),
    },

    methods: {
      ...mapActions({
        fetchProject: 'fetch',
      }),
    },

    beforeRouteEnter({ params }, from, next){
      const { slug } = params;
      store.dispatch('project/fetch', {
        slug,
      });
      next();
    },

    beforeRouteUpdate({ params }, from, next){
      const { slug } = params;
      store.dispatch('project/fetch', {
        slug,
      });
      next();
    },
  }
</script>

<style module>
  .header {
    display: grid;
    justify-content: center;
  }

  .body {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3rem;
    justify-items: center;
  }

  .text {
    box-sizing: border-box;
    padding-left: var(--app-margin);
    padding-right: var(--app-margin);
  }

  .gallery {
    width: 100vw;
  }
</style>
