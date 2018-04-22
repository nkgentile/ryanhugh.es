<template>
  <nav :class="$style.container">
    <navigation-link to="/">
      {{ title }}
    </navigation-link>
    <navigation-bar/>
  </nav>
</template>

<script>
  import {
    head,
    pathOr,
  } from 'ramda';

  import {
    mapGetters,
  } from 'vuex';

  import {
    fieldOr,
  } from '@/utils/contentful';

  import NavigationBar from '@/components/NavigationBar';
  import NavigationLink from '@/components/NavigationLink';

  export default {
    components: {
      NavigationBar,
      NavigationLink,
    },

    computed: {
      ...mapGetters([
        'getEntry',
      ]),

      portfolio(){
        return this.getEntry('portfolio');
      },

      title(){
        return pathOr('', ['fields', 'title'], this.portfolio);
      }
    },
  };
</script>

<style module>
  .container {
    display: grid;
    grid-template-columns: 1fr min-content;

    box-sizing: border-box;
    padding: 1rem;
  }
</style>
