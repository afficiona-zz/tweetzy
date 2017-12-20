import React, { Component } from 'react';

import Loader from './../components/Loader';

/**
 * TweetsList is a component to show the list of tweets from the store
 */
class TweetsList extends Component {
  render() {
    const Tweets = this.props.Tweets.get('data');
    return (
      <div className="tweets-box">
        {(() => {
          if (this.props.Tweets.get('isFetching')) {
            return <Loader />;
          }

          if (!this.props.Tweets.get('isFetching') && this.props.Tweets.get('isFetchingError')) {
            return <div>Something went wrong...</div>;
          }

          return Tweets.map((Tweet) => {
            let parsedData = Tweet.toJSON();
            return (
              <div className="each" id={parsedData.user.screenName}>
                <div className="avatar">
                  <img width="56" src={parsedData.user.profileImageUrl} alt=""/>
                </div>
                <div className="details">
                  <div className="clearfix">
                    <h2 className="name pull-left">{parsedData.user.name}</h2>
                    <a href={`https://twitter.com/${parsedData.user.screenName}`}
                       target="_blank"
                       className="username pull-left">{parsedData.user.screenName}</a>
                  </div>
                  <p className="description">
                    {parsedData.tweet.text}
                  </p>
                </div>
              </div>
            );
          });
        })()}
      </div>
    );
  }
}

export default TweetsList;
