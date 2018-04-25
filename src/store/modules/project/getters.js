import {
  pipe,
  filter,
  pathEq,
  head,
  pathOr,
} from 'ramda';

export default {
  project(state, getters, { portfolio: { entry }, route }){
    const slug = pathOr('', ['params', 'slug'], route);
    const projects = pathOr([], ['fields', 'projects'], entry);

    const slugEquals = pathEq(['fields', 'slug']);

    const matches = filter(slugEquals(slug), projects);

    return head(matches) || {};
  },
};
