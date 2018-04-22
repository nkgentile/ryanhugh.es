import Vue from 'vue';
import { isEmpty, complement } from 'ramda';
import markdown from '@/utils/marked';

const mixins = {
  methods: {
    isEmpty,
    isNotEmpty: complement(isEmpty),
    markdown(string = ''){
      return markdown(string);
    }
  }
};

Vue.mixin(mixins);
