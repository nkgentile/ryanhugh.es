<template>
  <nav :class="$style.container">
    <ul :class="$style.nav">
      <li :class="$style.item">
        <navigation-link to="/projects">
          Projects
        </navigation-link>
        <ul :class="$style.children">
          <template v-for="(project) in projects">
            <navigation-link :to="`/projects/${field('slug')(project)}`">
              {{ field('name')(project) }}
            </navigation-link>
          </template>
        </ul>
      </li>

      <li :class="$style.item">
        <navigation-link to="/contact">
          Contact
        </navigation-link>
        <ul :class="$style.children">
          <template v-for="(account) in socialAccounts">
            <navigation-link target="_blank" :href="field('url')(account)">{{ field('website')(account) }}</navigation-link>
          </template>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
  import {
    isEmpty,
    complement,
    pathOr,
  } from 'ramda';

  import {
    mapGetters,
  } from 'vuex';

  import {
    fieldOr,
    field,
  } from '@/utils/contentful';

  import NavigationLink from '@/components/NavigationLink';

  export default {
    components: {
      NavigationLink,
    },

    computed: {
      ...mapGetters([
        'getEntry',
      ]),

      portfolio(){
        return this.getEntry('portfolio');
      },

      projects(){
        return pathOr([], ['fields', 'projects'], this.portfolio);
      },

      socialAccounts(){
        return pathOr([], ['fields', 'socialAccounts'], this.portfolio);
      },
    },

    methods: {
      isNotEmpty: complement(isEmpty),
      field,
    },
  };
</script>

<style module>
  .container {
  }

  .nav {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    grid-template-rows: auto;
    grid-gap: 3rem;
  }

  .item {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
  }

  .item:hover .children {
    opacity: 1;
    pointer-events: auto;
  }

  .children {
    transition: 150ms opacity ease-in-out;

    opacity: 0;
    pointer-events: none;

    display: grid;
    grid-auto-rows: min-content;
  }
</style>
