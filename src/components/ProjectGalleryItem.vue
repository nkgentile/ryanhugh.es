<template>
  <figure
    :class="$style.container"
  >
    <responsive-image :class="$style.image" :url="url"/>
  </figure>
</template>

<script>
  import {
    propOr,
    pathOr,
  } from 'ramda';

  import ResponsiveImage from '@/components/ResponsiveImage';

  export default {
    components: {
      ResponsiveImage,
    },

    props: {
      asset: {
        type: Object,
        default: () => ({}),
      }
    },

    computed: {
      image(){
        return pathOr({}, ['fields', 'image'], this.asset);
      },

      file(){
        return pathOr({}, ['fields', 'file'], this.image);
      },

      url(){
        return propOr('', 'url', this.file);
      },
    },
  };
</script>

<style module>
  .container {
    display: grid;
    background-color: #fafafa;
  }

  .image {
    pointer-events: none;

    width: 100%;
    height: 100%;
  }
</style>
