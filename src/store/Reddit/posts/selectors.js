import _ from 'lodash';
import { selectors as topicsSelectors } from '../topics';


// selectors

export function getPosts(state) {
    const currentFilter = state.posts.currentFilter;
    const postsById = state.posts.postsById;
    const currentTopicUrls = topicsSelectors.getSelectedTopicsByUrl(state);
    const postsIdArray = currentFilter === 'all' ?
        _.filter(_.keys(postsById), (postId) => currentTopicUrls[postsById[postId].topicUrl]) :
        _.filter(_.keys(postsById), (postId) => postsById[postId].topicUrl === currentFilter);
    return [postsById, postsIdArray];
}

export function getCurrentFilter(state) {
    return state.posts.currentFilter;
}

export function getCurrentPost(state) {
    return _.get(state.posts.postsById, state.posts.currentPostId);
}
