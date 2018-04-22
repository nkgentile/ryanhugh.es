<template>
  <v-touch
    tag="section"
    @swipe="onSwipe"
    :class="$style.container"
  >
    <transition name="fade">
      <slot :index="index"/>
    </transition> </v-touch>
</template>

<script>
  import {
    inc,
    dec,
    clamp,
    equals,
    identity,
  } from 'ramda';

  import {
    faChevronLeft as fasChevronLeft,
    faChevronRight as fasChevronRight,
  } from '@fortawesome/fontawesome-free-solid';

  import FaIcon from '@fortawesome/vue-fontawesome';

  export default {
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
    },

    data: () => ({
      index: 0,
    }),

    methods: {
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
</style>
