<template>
  <router-link
    v-if="attrsHasTo"
    :class="$style.link"
    v-bind="$attrs"
  >
    <slot/>
  </router-link>

  <a
    v-else
    v-bind="$attrs"
    :class="$style.link"
  >
    <slot/>
  </a>
</template>

<script>
  import {
    has,
  } from 'ramda';

  export default {
    inheritAttrs: false,

    computed: {
      attrsHasTo(){
       return has('to', this.$attrs);
      },
    },

  };
</script>

<style module>
  .link {
    text-decoration: none;
  }
</style>
