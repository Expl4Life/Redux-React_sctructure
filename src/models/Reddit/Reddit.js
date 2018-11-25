import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors as topicsSelectors } from '../../store/Reddit/topics';
import TopicsScreen from './TopicsScreen/TopicsScreen';
import PostsScreen from './PostsScreen/PostsScreen';
import './Reddit.css';

class Reddit extends Component {
  render() {
    return (
      <div className="App">
        {!this.props.isSelectionFinalized ?
          <TopicsScreen /> :
          <PostsScreen />
        }
      </div>
    );
  }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
  return {
    isSelectionFinalized: topicsSelectors.isTopicSelectionFinalized(state)
  };
}

export default connect(mapStateToProps)(Reddit);
