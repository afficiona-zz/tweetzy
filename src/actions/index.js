import { SOCKET_SERVER_URL } from './../utils/constants';

/**
 * Fetch tweet updates from the WebSocket server
 */
const fetchTweetUpdates = (searchParam) => dispatch => {

  let socketUrl = SOCKET_SERVER_URL;

  //setting params in the url
  if (searchParam) {
    socketUrl += `?search=${searchParam}`;
  }

  //Initializing WebSocket
  window.WebSocket = window.WebSocket || window.MozWebSocket;
  let connection = new WebSocket(socketUrl);

  //Websocket connection is open
  connection.onopen = function () {
    dispatch({ type: 'FETCH_TWEET_UPDATE_INIT' });
  };

  //Websocket connection is closed/disconnected
  connection.onclose = function () {
    dispatch({ type: 'FETCH_TWEET_UPDATE_ERRORED' });
  };

  //Dispatch the update event on a new message with the updated data
  connection.onmessage = function (message) {
    const parsedData = JSON.parse(message.data);
    dispatch({
      type: 'FETCH_TWEET_UPDATE_FINISHED',
      data: parsedData
    });
  };
};

export default {
  fetchTweetUpdates
};
