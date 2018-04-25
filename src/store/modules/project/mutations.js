export default {
  setEntry(state, { items }){
    const [ entry ] = items;

    state.entry = {
      ...state.entry,
      ...entry,
    };
  },
};
