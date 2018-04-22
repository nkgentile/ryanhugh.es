<template>
  <section :class="$style.container">
    <template v-for="project in projects">
      <grid-item
        :entity="project"
        :key="project.sys.id"
      />
    </template>
  </section>
</template>

<script>
  import {
    mapGetters,
  } from 'vuex';

  import {
    fieldOr,
  } from '@/utils/contentful';

  import GridItem from '@/components/ProjectGridItem';

  export default {
    components: {
      GridItem,
    },

    computed: {
      ...mapGetters([
        'getEntry',
      ]),

      portfolio(){
        return this.getEntry('portfolio');
      },

      projects(){
        return fieldOr([], 'projects')(this.portfolio);
      },
    },
  };
</script>

<style module>
</style>
