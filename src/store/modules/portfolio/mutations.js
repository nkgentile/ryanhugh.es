export default {
  setEntry(state, payload){
    state.entry = {
      ...state.entry,
      ...payload,
    };
  },
};
