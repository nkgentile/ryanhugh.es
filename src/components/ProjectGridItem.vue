<template>
  <article :class="$style.container">
    <h1>{{ name }}</h1>
    <cf-image :media="hero"/>
  </article>
</template>

<script>
  import {
    fieldOr,
  } from '@/utils/contentful';

  import CfImage from '@/components/CFImage';

  export default {
    components: {
      CfImage,
    },

    props: {
      entity: {
        type: Object,
        default: () => ({}),
      },
    },

    computed: {
      name(){
        return fieldOr('', 'name')(this.entity);
      },

      hero(){
        return fieldOr({}, 'hero')(this.entity);
      },

      slug(){
        return fieldOr('', 'slug')(this.entity);
      },
    },
  };
</script>

<style module>
</style>
