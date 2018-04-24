<template>
  <nav :class="$style.container">
    <navigation-breadcrumb/>
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
  import NavigationBreadcrumb from '@/components/NavigationBreadcrumb';

  export default {
    components: {
      NavigationBar,
      NavigationLink,
      NavigationBreadcrumb,
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
