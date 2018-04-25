<template>
  <async-image
    :src="src"
    :width="width"
    :height="height"
   />
</template>

<script>
  import {
    identity,
    pathOr,
  } from 'ramda';

  import AsyncImage from '@/components/AsyncImage';

  export default {
    components: {
      AsyncImage,
    },

    props: {
      asset: {
        type: Object,
        default: identity({}),
      },
    },

    computed: {
      src(){
        return pathOr(
          '',
          ['fields', 'file', 'url'],
          this.asset
        );
      },

      width(){
        return pathOr(
          '',
          ['fields', 'file', 'details', 'image', 'width'],
          this.asset
        );
      },

      height(){
        return pathOr(
          '',
          ['fields', 'file', 'details', 'image', 'height'],
          this.asset
        );
      },
    },
  }
</script>
