<template>
  <v-touch
    tag="section"
    @swipe="onSwipe"
    :class="$style.container"
    v-bind="$attrs"
  >
    <slot :slides="slides"/>

    <nav :class="$style.navigation">
      <fa-icon
        :id="$style.left"
        :class="[
          $style.arrow,
          isFirstItem ?
            $style.inactive :
            $style.active,
        ]"
        :icon="fasChevronLeft"
        @click="previous"
      />
      <fa-icon
        :id="$style.right"
        :class="[
          $style.arrow,
          isLastItem ?
            $style.inactive :
            $style.active,
        ]"
        :icon="fasChevronRight"
        @click="next"
      />
    </nav>
  </v-touch>
</template>

<script>
  import {
    inc,
    dec,
    clamp,
    equals,
    identity,
    range,
    dropLast,
    take,
    takeLast,
  } from 'ramda';

  import {
    faChevronLeft as fasChevronLeft,
    faChevronRight as fasChevronRight,
  } from '@fortawesome/fontawesome-free-solid';

  import FaIcon from '@fortawesome/vue-fontawesome';

  export default {
    inheritAttrs: false,

    components: {
      FaIcon,
    },

    props: {
      length: {
        type: Number,
        default: identity(0),
      },
    },

    computed: {
      finalIndex(){
        return dec(this.length);
      },

      clamp(){
        return clamp(0, this.finalIndex);
      },

      isFirstItem(){
        return equals(this.index, 0);
      },

      isLastItem(){
        return equals(this.index, this.finalIndex);
      },

      fasChevronLeft(){
        return fasChevronLeft;
      },

      fasChevronRight(){
        return fasChevronRight;
      },
    },

    data: () => ({
      index: 0,
      slides: [],
    }),

    watch: {
      length: {
        immediate: true,
        handler(val){
          this.slides = range(0, val);
        },
      },
    },

    methods: {
      next(){
        if(this.isLastItem) return;

        const [ head, ...tail ] = this.slides;
        this.slides = [ ...tail, head ];
        this.increment();
      },

      previous(){
        if(this.isFirstItem) return;

        const head = dropLast(1, this.slides);
        const tail = takeLast(1, this.slides);
        this.slides = [ ...tail, ...head ];
        this.decrement();
      },

      increment(){
        this.setIndex(inc(this.index));
      },

      decrement(){
        this.setIndex(dec(this.index));
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
    },
  };
</script>

<style module>
  .navigation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    color: white;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    align-items: center;

    box-sizing: border-box;
    padding: 1rem;

    pointer-events: none;
  }

  .arrow {
    grid-column-end: span 1;
    grid-row: 2 / span 1;

    cursor: pointer;
    pointer-events: auto;
    
    padding: 1rem;
  }

  .arrow.active {
    opacity: 1;
  }

  .arrow.inactive {
    opacity: 0.25;
  }

  .arrow#left {
    grid-column-start: 1;
    justify-self: flex-start;
  }

  .arrow#right {
    grid-column-start: 3;
    justify-self: flex-end;
  }
</style>
