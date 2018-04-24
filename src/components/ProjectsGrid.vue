<template>
  <ul :class="$style.list">
    <template v-for="project in projects">
      <project-card
        :project="localizeEntry(project)"
        :class="$style.item"
      />
    </template>
  </ul>
</template>

<script>
  import { 
    createNamespacedHelpers,
  } from 'vuex';
  const { mapState } = createNamespacedHelpers('portfolio');

  import {
    pathOr,
  } from 'ramda';

  import {
    fieldOr,
    fieldPath,
    localizeEntry,
  } from '@/utils/contentful';

  import ProjectCard from '@/components/ProjectCardFullBleed';

  export default {
    components: {
      ProjectCard,
    },

    computed: {
      ...mapState({
        portfolio: 'entry',
      }),

      projects(){
        return pathOr([], ['fields', 'projects'], this.portfolio);
      },
    },

    methods: {
      localizeEntry: localizeEntry('en-US'),
    },
  };
</script>

<style module>
  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 20rem;
    grid-gap: 1rem;
  }

  .item {
  }
</style>
