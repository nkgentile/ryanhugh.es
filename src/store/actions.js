import client from '@/api';

const actions = {
  async fetch({ commit, getters }){
    /*const response = await client.sync({
      initial: true,
    });

    commit('receive', response);

    const { getEntry } = getters;
    commit('portfolio/setEntry', getEntry('portfolio'));
    */
  },
};

export default actions;
