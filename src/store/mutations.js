import {
  map,
} from 'ramda';

import {
  localizeEntry,
} from '@/utils/contentful';

const mutations = {
  receive(state, {
    assets,
    entries,
    nextSyncToken,
   }){

    const localizeMap = map(localizeEntry('en-US'));

    const localizedEntries = localizeMap(entries);
    const localizedAssets = localizeMap(assets);

    state.api = {
      ...state.api,
      entries,
      assets,
      nextSyncToken,
    };

  },
};

export default mutations;
