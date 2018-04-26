<template>
  <app-breadcrumb
    :class="$style.breadcrumb"
  >
    <navigation-link
      v-if="isNotRoot"
    >
      {{ name }}
    </navigation-link>
  </app-breadcrumb>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const {
    mapState,
  } = createNamespacedHelpers('route');

  import AppBreadcrumb from '@/components/Breadcrumb';
  import NavigationLink from '@/components/NavigationLink';

  export default {
    components: {
      NavigationLink,
      AppBreadcrumb,
    },

    computed: {
      ...mapState([
        'name',
        'params',
        'path',
      ]),

      isNotRoot(){
        return this.path != '/';
      },
    },
  };
</script>

<style module>
  .breadcrumb *:first-child {
    font-weight: bold;
  }
</style>
