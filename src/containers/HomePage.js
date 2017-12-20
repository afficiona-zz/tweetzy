import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from './../actions';
import TweetsList from './../components/TweetsList';
import SearchForm from './../components/SearchForm';

const twitterUrl = require('./../assets/images/twitter.png');

class HomePage extends Component {

  componentDidMount() {
    //Fetching tweets
    this.fetchTweets('Bitcoin');
  };

  fetchTweets = (search) => {
    this.props.actions.fetchTweetUpdates(search);
  };

  render() {
    return (
      <div className="app">
        <div className="main-wrapper">
          <div className="content-wrapper">
            <div className="content-sidebar">
              <img width="55" src={twitterUrl} alt=""/>
            </div>
            <div className="content-main">
              <div className="content-header">
                <SearchForm fetchTweets={this.fetchTweets} />
              </div>
              <div className="content-body">
                <TweetsList Tweets={this.props.Tweets} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ Tweets }) {
  return {
    Tweets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
