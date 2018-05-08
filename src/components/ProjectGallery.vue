<template>
  <TouchGallery
    v-if="assets.length"
    :class="$style.container"
    :length="assets.length"
    :controls="assets.length > 1"
  >
    <template slot-scope="{ slides, active }">
      <transition-group
        :class="$style.gallery"
        tag="ul"
      >
        <li
          v-for="index in slides"
          :key="assets[index].sys.id"
          :class="$style.item"
        >
          <gallery-item
            :asset="assets[index]"
            :class="$style.asset"
          />
        </li>
      </transition-group>

      <gallery-caption
        :asset="assets[active]"
        :class="$style.caption"
      />
    </template>
  </TouchGallery>
</template>

<script>
  import {
    scaleLinear,
  } from 'd3-scale';

  import {
    inc,
    dec,
    clamp,
  } from 'ramda';

  import {
    localizeEntry,
  } from '@/utils/contentful';

  import {
    faChevronLeft as fasChevronLeft,
    faChevronRight as fasChevronRight,
  } from '@fortawesome/fontawesome-free-solid';

  import FaIcon from '@fortawesome/vue-fontawesome';

  import GalleryItem from '@/components/ProjectGalleryItem';
  import GalleryCaption from '@/components/ProjectGalleryCaption';
  import GalleryNavigator from '@/components/ProjectGalleryNavigator';
  import TouchGallery from '@/components/TouchGallery';

  export default {
    components: {
      FaIcon,
      GalleryItem,
      GalleryCaption,
      GalleryNavigator,
      TouchGallery,
    },

    props: {
      assets: {
        type: Array,
        default: () => [],
      },
    },

    data: () => ({
      index: 0,
      transform: 0,
    }),

    computed: {
      deck(){
        const { index, assets } = this;

        const isAtStart = index === 0;
        const isAtEnd = index === dec(assets.length);

        const prev = dec(index);
        const next = inc(index);

        return !(isAtStart || isAtEnd) ?
          [ prev, index, next ] :
          isAtStart ? [ index, next ] :
            [ prev, index ];
      },

      asset(){
        return this.assets[this.index];
      },

      style(){
        return {
          transform: `translateX(${this.transform}%)`,
        };
      },

      clamp(){
        return clamp(0, this.assets.length - 1);
      },

      scale(){
        return scaleLinear()
          .domain([-300, 0, 300])
          .range([-100, 0, 100])
          .clamp(true)
      },

      isFirstItem(){
        return this.index === 0;
      },

      isLastItem(){
        return this.index === this.assets.length-1;
      },

      fasChevronLeft(){
        return fasChevronLeft;
      },

      fasChevronRight(){
        return fasChevronRight;
      },
    },

    methods: {
      increment(){
        const index = inc(this.index);
        this.setIndex(index);
      },

      decrement(){
        const index = dec(this.index);
        this.setIndex(index);
      },

      setIndex(n){
        this.index = this.clamp(n);
      },

      onSwipe(e){
        const { direction } = e;

        switch(direction){
          case Hammer.DIRECTION_LEFT:
            this.increment();
            break;
          case Hammer.DIRECTION_RIGHT:
            this.decrement();
            break;
          default:
            break;
        }
      },

      onPan(e){
        const { center, deltaX, direction, distance, isFinal } = e;

        const transform = this.scale(deltaX);
        this.transform = transform;

        if(isFinal){
          if(distance > 150){
          }

          else {
            this.transform = -this.index * 100;
          }
        }
      },

      localizeEntry: localizeEntry('en-US'),
    },
  };
</script>

<style module>
  .container {
    position: relative;

    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(20rem, 40vw) auto auto;
  }

  .gallery {
    display: flex;
    flex-flow: row nowrap;

    position: relative;

    pointer-events: none;

    background-color: #fcfcfc;
  }

  .item {
    flex: 0 0 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;

    pointer-events: none;
  }

  .asset {
  }

  .caption {
    color: #555555;
  }
</style>
