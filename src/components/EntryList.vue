<template functional>
  <ul>
    <template v-for="entity in entities">
      <li :key="entity.sys.id">
        <slot :entity="entity"/>
      </li>
    </template>
  </ul>
</template>

<script>
  import {
    identity,
  } from 'ramda';

  export default {
    props: {
      entries: {
        type: Array,
        default: identity([]),
      },
    }
  };
</script>
