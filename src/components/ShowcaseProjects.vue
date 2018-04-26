<template>
  <touch-gallery
    :class="$style.container"
    :length="showcase.length"
    navigation-color="white"
    controls
  >
    <template slot-scope="{ slides }">
      <transition-group
        :class="$style.list"
        tag="ul"
      >
        <li
          v-for="index in slides"
          :key="showcase[index].sys.id"
          :class="$style.item"
        >
          <project-card 
            :key="showcase[index].sys.id"
            :project="showcase[index]"
            :class="$style.project"
          />
        </li>
      </transition-group>
    </template>
  </touch-gallery>
</template>

<script>
  import {
    pathOr,
  } from 'ramda';

  import {
    createNamespacedHelpers,
  } from 'vuex';
  const { mapState } = createNamespacedHelpers('portfolio');

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
        return pathOr(
          [], 
          ['fields', 'showcase'],
          this.portfolio
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

  .list {
    position: relative; 

    display: flex;
    flex-flow: row nowrap;

    overflow: hidden;
  }

  .item {
    flex: 0 0 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .project {
  }
</style>
