<template>
  <async-image
    v-if="!isEmpty(asset)"
    :src="src"
    :width="width"
    :height="height"
   />
</template>

<script>
  import { isEmpty } from 'ramda';

  import {
    localizeEntry,
  } from '@/utils/contentful';

  import AsyncImage from '@/components/AsyncImage';

  export default {
    components: {
      AsyncImage,
    },

    props: {
      asset: {
        type: Object,
        required: true,
        default: () => ({}),
      },
    },

    computed: {
      localizedAsset(){
        return localizeEntry('en-US')(this.asset);
      },

      fields(){
        return this.localizedAsset.fields;
      },

      file(){
        return this.fields.file;
      },

      type(){
        return this.file.contentType;
      },

      src(){
        return this.file.url;
      },

      details(){
        return this.file.details;
      },

      width(){
        return this.details.image.width;
      },

      height(){
        return this.details.image.height;
      },
    },

    methods: {
      isEmpty
    },
  }
</script>
