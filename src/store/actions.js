import client from '@/api';

const actions = {
  async fetch({ commit }){
    const response = await client.sync({
      initial: true,
    });

    commit('receive', response);
  },
};

export default actions;
