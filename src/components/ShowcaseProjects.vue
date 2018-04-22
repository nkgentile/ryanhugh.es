<template>
  <touch-gallery
    v-if="isNotEmpty(heroes)"
    :class="$style.container"
    :length="heroes.length"
  >
    <template slot-scope="{ index }">
      <project-card 
        v-for="(project, i) in localizedProjects"
        :key="project.sys.id"
        v-if="i === index"
        :project="project"
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
    mapState,
    mapGetters,
  } from 'vuex';

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
      ...mapGetters([
        'getEntry',
      ]),

      portfolio(){
        return this.getEntry('portfolio');
      },

      showcase(){
        return pathOr(
          [],
          ['fields', 'showcase']
        )(this.portfolio);
      },

      localizedProjects(){
        return map(
          localizeEntry('en-US'),
          this.showcase
        );
      },

      heroes(){
        return map(
          pathOr({}, ['fields', 'hero']),
          this.localizedProjects
        );
      },

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
