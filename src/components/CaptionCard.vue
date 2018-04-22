<template>
  <article :class="$style.container">
    <main :class="$style.body">
      <slot/>
    </main>
  </article>
</template>

<style module>
  .container {
    display: grid;
    grid-template-columns: max-content;
    align-content: flex-end;
    justify-content: flex-end;

    box-sizing: border-box;
    padding: 3rem;
  }

  .body {
    background-color: white;

    box-sizing: border-box;
    padding: 1rem 3rem;
  }
</style>
