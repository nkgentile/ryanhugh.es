<template>
  <article v-if="isNotEmpty(project)" :class="$style.container">
    <header>
      <h1>
        <router-link to="/">
          Ryan Hughes,
        </router-link>
        {{ project.fields.name }}
      </h1>
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

  </article>
</template>

<script>
  import {
    head,
    lensPath,
    path,
    pipe,
    view,
    equals,
    filter,
    map,
    pathEq,
    _,
    propEq,
  } from 'ramda';

  import {
    createNamespacedHelpers,
    mapState,
    mapGetters,
  } from 'vuex';

  import {
    localizeEntry,
  } from '@/utils/contentful';

  const {
    mapState: mapRouterState,
  } = createNamespacedHelpers('route');

  import ProjectGallery from '@/components/ProjectGallery';

  export default {
    name: 'Project',

    components: {
      ProjectGallery,
    },

    computed: {
      ...mapRouterState([
        'params'
      ]),

      ...mapGetters([
        'getEntries',
      ]),

      projects(){
        return this.getEntries('project');
      },

      project(){
        const { slug } = this.params;

        const findProject = pipe(
          filter(
            pathEq(
              ['fields', 'slug'],
              slug
            )
          ),
          head,
        );

        return findProject(this.projects) || {};
      },
    },
  }
</script>

<style module>
  .container {
    --spacing: 3rem;
    position: relative;

    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-gap: var(--spacing);
    justify-items: center;

    box-sizing: border-box;
    padding-top: var(--app-margin);
    padding-bottom: var(--app-margin);
  }

  .body {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--spacing);
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
