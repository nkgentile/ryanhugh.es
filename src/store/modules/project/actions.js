import client from '@/api';

export default {
  async fetch({ commit }, { slug }){
    const response = await client.getEntries({
      content_type: 'project',
      'fields.slug': slug,
    });

    commit('setEntry', response);
  },
};
