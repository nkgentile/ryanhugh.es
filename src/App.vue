<template>
  <div id="app-container">
    <main id="app">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </main>
  </div>
</template>

<script>
  import AppNavigation from '@/components/AppNavigation';

  export default {
    name: 'app',

    components: {
      AppNavigation,
    },
  };
</script>
