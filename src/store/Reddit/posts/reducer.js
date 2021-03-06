// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views

import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  postsById: undefined,
  currentFilter: 'all',
  currentPostId: undefined
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.POSTS_FETCHED:
      return state.merge({
        postsById: action.postsById
      });
    case types.FILTER_CHANGED:
      return state.merge({
        currentFilter: action.filter
      });
    case types.POST_SELECTED:
      return state.merge({
        currentPostId: action.postId
      });
    default:
      return state;
  }
}
