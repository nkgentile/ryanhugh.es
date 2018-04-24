import { createClient } from 'contentful';

import {
  lensPath,
  path,
  pathOr,
  __ as _,
  mergeWith,
  prop,
  over,
  lensProp,
  reduce,
  keys,
  props,
  compose,
  map,
  empty,
  concat,
  pair,
} from 'ramda';


const client = createClient({
  space: 'ed21jbwqbc3w',
  accessToken: 'c4153968c64d7cda6a1ddb98d31b2236db716ba656d6a560aaa96898ba2ce827'
});

export default client;

export const fieldLens = (field) =>
  lensPath(fieldPath(field));

export const fieldPath = pair('fields');

export const field = (field) => path(fieldPath(field));

export const fieldOr = (field) => pathOr(_, fieldPath(field));

export const localizeEntry = (locale) =>
  over(
    lensProp('fields'),
    map(
      prop(locale)
    )
  );
