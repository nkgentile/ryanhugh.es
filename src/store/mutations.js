const mutations = {
  receive(state, payload){
    state.api = {
      ...state.api,
      ...payload,
    };
  },
};

export default mutations;
