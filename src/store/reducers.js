import RedditReducers from './Reddit/reducers';
import { combineReducers } from 'redux';

const reducers = combineReducers(
    RedditReducers
)

export default reducers;