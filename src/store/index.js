import Vue from 'vue';
import Vuex from 'vuex';

import modules from './modules';
import initialState from './initialState';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules,

  state: initialState,

  getters,
  mutations,
  actions,
});

export default store;
