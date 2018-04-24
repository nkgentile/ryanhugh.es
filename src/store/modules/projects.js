export default {
  namespaced: true,

  state: {
    byId: {},
    ids: [],
  },

  mutations: {
    receive(state, { entries }) {
      console.log(entries);
    },
  },

  actions: {
    populate({ commit, rootGetters: { getEntry } }){
      const { projects } = getEntry('portfolio');
      commit('receive', projects);
    },
  },
};
