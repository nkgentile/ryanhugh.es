import client from '@/api';

export default {
  async fetch({ commit }){
    const response = await client.getEntries({
      content_type: 'portfolio'
    });

    commit('set', response);
  },
};
