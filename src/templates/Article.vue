<template>
  <article :class="$style.container">
    <app-navigation :class="$style.navigation" />
    <slot/>
  </article>
</template>

<script>
  import AppNavigation from '@/components/AppNavigation';

  export default {
    components: {
      AppNavigation,
    },
  };
</script>

<style module>
  .container {
    display: grid;
    grid-template-rows: min-content auto;
  }

  .navigation {
  }
</style>
