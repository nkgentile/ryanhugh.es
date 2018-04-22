<template>
  <figure :class="$style.container">
    <responsive-image :class="$style.image" :url="url"/>
  </figure>
</template>

<script>
  import {
    propOr,
  } from 'ramda';

  import {
    fieldOr,
  } from '@/utils/contentful';

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
        return fieldOr({}, 'image')(this.asset);
      },

      file(){
        return fieldOr({}, 'file')(this.image);
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
