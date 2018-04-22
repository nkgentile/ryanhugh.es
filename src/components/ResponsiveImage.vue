<template>
  <picture
    :class="$style.container"
  >
    <source :srcset="webp" type="image/webp"/>
    <img
      :src="jpg"
      :class="{
        [$style.image]: true,
        [$style.cover]: cover,
      }"
    />
  </picture>
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        default: '',
      },

      cover: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      webp(){
        return `${this.url}?fm=webp&w=800&h=800`;
      },

      jpg(){
        return `${this.url}?fm=jpg&fl=progressive`;
      },
    },
  };
</script>

<style module>
  .container {
    position: relative;
  }

  .image {
    min-width: 100%;
    min-height: 100%;

    max-width: 100%;
    max-height: 100%;

    object-fit: contain;
  }

  .cover {
    object-fit: cover;
  }
</style>
