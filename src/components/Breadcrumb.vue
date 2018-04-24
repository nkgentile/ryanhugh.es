<template>
  <h1>
    <router-link
      to="/"
      class="breadcrumb__root"
    >
      Ryan Hughes</router-link>
    <slot/>
  </h1>
</template>

<style scoped>
  .breadcrumb__root {
    text-decoration: none;
  }

  .breadcrumb__root:not(.router-link-exact-active)::after {
    content: ', ';
  }
</style>
