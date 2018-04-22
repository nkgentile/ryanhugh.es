<template>
  <v-touch
    tag="section"
    :class="$style.container"
    @swipe="onSwipe"
    v-if="isNotEmpty(assets)"
  >
    <div :class="$style['gallery']">
      <div
        :class="[$style.arrow, $style.arrowLeft]">
        <fa-icon
          v-if="assets.length > 1"
          :icon="fasChevronLeft"
          @click="decrement"
          :class="{
            [$style.arrowIcon]: true,
            [$style.inactive]: isFirstItem,
          }"
        />
      </div>

      <transition name="fade">
        <gallery-item
          :asset="asset"
          :key="asset.sys.id"
          :class="$style.item"
        />
      </transition>

      <div
        :class="[$style.arrow, $style.arrowRight]">
        <fa-icon
          v-if="assets.length > 1"
          :icon="fasChevronRight"
          @click="increment"
          :class="{
            [$style.arrowIcon]: true,
            [$style.inactive]: isLastItem,
          }"
        />
      </div>
    </div>

    <gallery-caption
      :asset="asset"
      :class="$style.caption"
    />
    <gallery-navigator
      :length="assets.length"
      :index="index"
      :class="$style.navigator"
      :onNodeClick="setIndex"
      v-if="assets.length > 1"
    />
  </v-touch>
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
    faChevronLeft as fasChevronLeft,
    faChevronRight as fasChevronRight,
  } from '@fortawesome/fontawesome-free-solid';

  import FaIcon from '@fortawesome/vue-fontawesome';

  import GalleryItem from '@/components/ProjectGalleryItem';
  import GalleryCaption from '@/components/ProjectGalleryCaption';
  import GalleryNavigator from '@/components/ProjectGalleryNavigator';

  export default {
    components: {
      FaIcon,
      GalleryItem,
      GalleryCaption,
      GalleryNavigator,
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
    box-sizing: border-box;

    display: grid;
    grid-template-columns: 3rem 1fr 3rem;
    grid-template-rows: 100%;

    background-color: #fafafa;

    position: relative;
  }

  .item {
    min-width: 100%;
    min-height: 100%;

    max-width: 100%;
    max-height: 100%;

    position: absolute;
  }

  .arrow {
    display: grid;
    align-items: center;
    justify-content: center;
    z-index: 1;

    opacity: 0;
    pointer-events: none;
    transition: opacity 150ms ease-in-out;
  }

  .arrow .arrowIcon {
    cursor: pointer;

    transition: transform 150ms ease-in-out;
    transform: translateX(0);
  }

  .arrowLeft:hover .arrowIcon {
    //transform: translateX(-100%);
  }

  .arrowRight:hover .arrowIcon {
    //transform: translateX(100%);
  }

  .inactive {
    color: gray;
    cursor: auto;
  }

  .gallery:hover .arrow {
    opacity: 1;
    pointer-events: auto;
  }

  @media screen and (max-width: 900px) {
    .arrowIcon {
      display: none;
    }
  }
</style>
