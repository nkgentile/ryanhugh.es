<template>
  <ul :class="$style.container">
    <template v-for="n in length">
      <span
        @click="onNodeClick(n-1)"
        :class="{
          [$style.item]: true,
          [$style.active]: index === n-1,
        }" />
    </template>
  </ul>
</template>

<script>
  export default {
    props: {
      length: {
        type: Number,
        default: 0,
      },

      index: {
        type: Number,
        default: 0,
      },

      onNodeClick: {
        type: Function,
        default: () => {},
      }
    },
  };
</script>

<style module>
  .container {
    --node-diameter: 1ch;

    display: grid;
    grid-template-rows: auto;
    grid-auto-flow: column;
    grid-auto-columns: var(--node-diameter);
    justify-content: center;
    grid-gap: var(--node-diameter);

    margin: 1rem;
  }

  .item {
    width: var(--node-diameter);
    height: var(--node-diameter);

    border-radius: 100%;

    background-color: black;
    opacity: 0.5;
    transition: opacity 150ms ease-in-out;

    cursor: pointer;
  }

  .active {
    opacity: 1;
  }
</style>
