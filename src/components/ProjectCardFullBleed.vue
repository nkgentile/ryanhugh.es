<template>
  <card-full-bleed
    :to="`/projects/${project.fields.slug}`"
  >
    <cf-image :asset="project.fields.hero" />
    <caption-card
      slot="caption"
    >
      {{ project.fields.name }}
    </caption-card>
  </card-full-bleed>
</template>

<script>
  import {
    identity,
  } from 'ramda';

  import CardFullBleed from '@/components/CardFullBleed';
  import CfImage from '@/components/CFImage';
  import CaptionCard from '@/components/CaptionCard';

  export default {
    components: {
      CardFullBleed,
      CfImage,
      CaptionCard,
    },

    props: {
      project: {
        type: Object,
        default: identity({}),
      },
    },
  };
</script>
