import { fromJS } from 'immutable';

import { normalizeTweetsData } from './../utils/normalizer';

const initialState = fromJS({
  isFetching: false,
  isFetchingError: false,
  isFetchedOnce: false,
  error: {},
  data: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TWEET_UPDATE_INIT':
      return state.merge({
        isFetching: true,
        isFetchingError: false,
        data: []
      });

    case 'FETCH_TWEET_UPDATE_FINISHED':
      return state.merge({
        isFetching: false,
        isFetchingError: false,
        data: normalizeTweetsData(action.data, state.get('data'))
      });

    case 'FETCH_TWEET_UPDATE_ERRORED':
      return state.merge({
        isFetching: false,
        isFetchingError: true,
        error: action.error
      });

    default:
      return state;
  }
};
