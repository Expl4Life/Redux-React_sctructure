import _ from 'lodash';
// selectors

export function getTopics(state) {
    const topicsByUrl = state.topics.topicsByUrl;
    const topicsUrlArray = _.keys(topicsByUrl);
    return [topicsByUrl, topicsUrlArray];
}

export function getSelectedTopicUrls(state) {
    return state.topics.selectedTopicUrls;
}

export function getSelectedTopicsByUrl(state) {
    return _.mapValues(_.keyBy(state.topics.selectedTopicUrls), (topicUrl) => state.topics.topicsByUrl[topicUrl]);
}

export function isTopicSelectionValid(state) {
    return state.topics.selectedTopicUrls.length === 3;
}

export function isTopicSelectionFinalized(state) {
    return state.topics.selectionFinalized;
}
