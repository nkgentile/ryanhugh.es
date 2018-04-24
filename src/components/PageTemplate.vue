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
    position: relative;

    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-gap: 3rem;
    justify-items: center;

    box-sizing: border-box;
    padding-top: var(--app-margin);
    padding-bottom: var(--app-margin);

  }

  .navigation {
  }
</style>
