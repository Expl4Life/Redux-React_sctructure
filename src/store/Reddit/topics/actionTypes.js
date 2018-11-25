// strings should be unique across reducers so namespace them with the reducer name

const UNIQ_KEY = 'topics';

export const TOPICS_FETCHED = `${UNIQ_KEY}TOPICS_FETCHED'`;
export const TOPICS_SELECTED = `${UNIQ_KEY}topics.TOPICS_SELECTED`;
export const TOPIC_SELECTION_FINALIZED = `${UNIQ_KEY}topics.TOPIC_SELECTION_FINALIZED`;
