<template>
  <figcaption
    v-if="isNotEmpty(asset)"
    :class="$style.container"
    v-html="markdown(asset.fields.description)"
  />
</template>

<script>
  import {
    propOr,
  } from 'ramda';

  export default {
    props: {
      asset: {
        type: Object,
        default: () => ({}),
      }
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
