<template>
  <figcaption
    :class="$style.container"
    v-html="markdown(caption)"
  />
</template>

<script>
  import {
    propOr,
  } from 'ramda';

  import {
    fieldOr,
  } from '@/utils/contentful';

  export default {
    props: {
      asset: {
        type: Object,
        default: () => ({}),
      }
    },

    computed: {
      caption(){
        return fieldOr({}, 'description')(this.asset);
      },
    },
  };
</script>

<style module>
  .container {
    display: grid;
    justify-content: center;
    text-align: center;
  }
</style>
