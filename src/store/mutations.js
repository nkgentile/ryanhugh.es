const mutations = {
  receive(state, {
    assets,
    entries,
    deletedAssets,
    deletedEntries,
    nextSyncToken,
  }){
    state.assets = assets;
    state.entries = entries;
    state.deletedAssets = deletedAssets;
    state.deletedEntries = deletedEntries;
    state.nextSyncToken = nextSyncToken;
  },
};

export default mutations;
