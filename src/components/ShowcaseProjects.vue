<template>
  <touch-gallery
    :class="$style.container"
    :length="showcase.length"
  >
    <template slot-scope="{ index }">
      <project-card 
        v-for="(project, i) in showcase"
        :key="project.sys.id"
        v-if="i === index"
        :project="localizeEntry('en-US')(project)"
      />
    </template>
  </touch-gallery>
</template>

<script>
  import {
    pathOr,
    map,
    compose,
  } from 'ramda';

  import {
    createNamespacedHelpers,
  } from 'vuex';
  const { mapState } = createNamespacedHelpers('portfolio');

  import {
    fieldOr,
    localizeEntry,
  } from '@/utils/contentful';

  import TouchGallery from '@/components/TouchGallery';
  import ProjectCard from '@/components/ProjectCardFullBleed';

  export default {
    components: {
      TouchGallery,
      ProjectCard,
    },

    computed: {
      ...mapState({
        portfolio: 'entry',
      }),

      showcase(){
        return pathOr([], ['fields', 'showcase'], this.portfolio);
      },
    },

    methods: {
      localizeEntry,
    },
  };
</script>

<style module>
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    overflow: hidden;
  }
</style>
