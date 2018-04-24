import {
  pipe,
  head,
  into,
  lensPath,
  equals,
  view,
  compose,
  filter,
  map,
} from 'ramda';

import {
  localizeEntry,
} from '@/utils/contentful';

const getters = {
  getEntries: ({ api: { entries } }) => (contentType) => {
    const pathToContentType = [
      'sys',
      'contentType',
      'sys',
      'id',
    ];

    const lensContentType = lensPath(pathToContentType);

    const equalToSelector = equals(contentType);

    const isOfType = pipe(
      view(lensContentType),
      equalToSelector,
    );

    const transducer = compose(
      filter(isOfType),
      map(localizeEntry('en-US')),
    );

    return into(
      [],
      transducer,
      entries
    );
  },

  getEntry: (state, { getEntries }) => pipe(getEntries, head),
};

export default getters;
