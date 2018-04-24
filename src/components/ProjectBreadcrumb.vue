<template>
  <breadcrumb-block :class="$style.container">
    <slot/>
  </breadcrumb-block>
</template>

<script>
  import BreadcrumbBlock from '@/components/Breadcrumb';

  export default {
    components: {
      BreadcrumbBlock,
    },
  };
</script>

<style module>
  .container {
    font-size: 2rem;
  }
</style>
