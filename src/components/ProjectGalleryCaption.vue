<template>
  <figcaption
    v-if="isNotEmpty(asset)"
    :class="$style.container"
  >
    <header
      v-if="isNotEmpty(asset.fields.title)"
      v-html="markdown(asset.fields.title)"
      :class="$style.title"
    />
    <main
      v-if="isNotEmpty(asset.fields.description)"
      v-html="markdown(asset.fields.description)"
      :class="$style.description"
    />
  </figcaption>
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

  .title {
    margin: 0;
    font-weight: bold;
  }

  .description {
    margin: 0;
    font-style: italic;
  }
</style>
