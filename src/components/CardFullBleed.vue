<template>
  <router-link
    tag="article"
    :class="$style.container"
    v-bind="$attrs"
  >
    <figure :class="$style.asset">
      <slot />
    </figure>

    <figcaption :class="$style.caption">
      <slot name="caption"/>
    </figcaption>
  </router-link>
</template>

<script>
  export default {
    inheritAttrs: false,
  };
</script>

<style module>
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    overflow: hidden;

    cursor: pointer;
  }

  .asset {
    grid-column: 1 / span 3;
    grid-row: 1 / span 3;

    position: relative;
    pointer-events: none;
  }

  .asset > * {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
  }

  .caption {
    grid-column: 1 / span 3;
    grid-row: 3;

    display: grid;

    z-index: 1;

    pointer-events: none;
  }
</style>
