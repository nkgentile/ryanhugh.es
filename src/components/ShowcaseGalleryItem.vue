<template>
  <figure :class="$style.container">
    <responsive-image :class="$style.image" :url="url" cover/>
    <router-link
      :to="`/projects/${slug}`"
      tag="figcaption"
      :class="$style.info"
    >
      <h1
        :class="$style.name"
        key="name"
      >
        {{ name }}
      </h1>
    </router-link>
  </figure>
</template>

<script>
  import {
    propOr,
  } from 'ramda';

  import {
    fieldOr,
  } from '@/utils/contentful';

  import {
    faArrowRight as fasArrowRight,
  } from '@fortawesome/fontawesome-free-solid';

  import ResponsiveImage from '@/components/ResponsiveImage';
  import FaIcon from '@fortawesome/vue-fontawesome';

  export default {
    components: {
      ResponsiveImage,
      FaIcon,
    },

    props: {
      asset: {
        type: Object,
        default: () => ({}),
      }
    },

    data: () => ({
      hovered: false,
    }),

    computed: {
      image(){
        return fieldOr({}, 'hero')(this.asset);
      },

      file(){
        return fieldOr({}, 'file')(this.image);
      },

      url(){
        return propOr('', 'url', this.file);
      },

      name(){
        return fieldOr('', 'name')(this.asset);
      },

      slug(){
        return fieldOr('', 'slug')(this.asset);
      },

      fasArrowRight(){
        return fasArrowRight;
      },
    },

    methods: {
      onMouseEnter(){
        this.hovered = true;
      },

      onMouseLeave(){
        this.hovered = false;
      },
    },
  };
</script>

<style module>
  .container {
    display: grid;
  }

  .image {
    pointer-events: none;
  }

  .info {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;

    background-color: white;
    color: black;

    box-sizing: border-box;
    margin: var(--app-margin);
    padding: 2rem;

    text-align: center;
    cursor: pointer;
  }

  .info > *{
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: columns;
    grid-gap: 1ch;
    align-items: center;
  }
</style>
