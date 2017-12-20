/**
 * Tweets data normalizer. The new tweet that is fetched is an object which needs to be pushed
 * to the list of existing tweets in the store(in the FIFO manner). This new tweet is added in the beginning of the
 * list(Cause we want to show the new tweet right on top). The list, however, has maximum limit
 * of 5 tweets.
 *
 * @param newTweet {Object}
 * @param oldData {[]} Immutable
 * @returns {[]}
 */
export const normalizeTweetsData = function(newTweet, oldData) {
  let stateData = oldData.toJSON();

  //Removing the last tweet if the tweets length is 5.
  if (stateData.length === 5) {
    stateData.pop();
  }

  //Pushing the new tweet in the start of the list
  stateData.unshift(newTweet);

  return stateData;
};