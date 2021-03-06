// actions are where most of the business logic takes place
// they are dispatched by views or by other actions
// there are 3 types of actions:
//  async thunks - when doing asynchronous business logic like accessing a service
//  sync thunks - when you have substantial business logic but it's not async
//  plain object actions - when you just send a plain action to the reducer

import _ from 'lodash';
import * as types from './actionTypes';


export function changeFilter(newFilter) {
  return({ type: types.FILTER_CHANGED, filter: newFilter });
}

export function selectPost(postId) {
  return({ type: types.POST_SELECTED, postId });
}
