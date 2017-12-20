const express = require('express');
const SocketServer = require('ws').Server;
const url = require('url');

var Twit = require('twit');

const PORT = process.env.PORT || 4000;

const server = express()
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const WebSockets = new SocketServer({ server });

//Creating a new Twitter instance with the required authentication secret details
const twitter = new Twit({
  consumer_key: 'eHUZjGTewSvlTRQG6buJn33Aa',
  consumer_secret: 'UMYsRzLlQCsqp5JZ5mqTeMfOYUj3P1m86dcYhUDlWYuvMm8APM',
  access_token: '2831202766-YnLzmCE1gnrbkPnDB57X4bueBNagMYA1oexyYvv',
  access_token_secret: 'YeyaMVsXcGAxpIr1QMcIIyzMhAnMj9wbwHziHTmNrKzuM'
});

//On connecting successfully to clients
WebSockets.on('connection', (ws, req) => {

  //Parsing the request
  const location = url.parse(req.url, true);

  //streaming the statuses/filter endpoint
  var tweetStream = twitter.stream('statuses/filter', {
    //Tracking the tweets as per the search query
    track: location.query.search
  });

  //Handling the tweets
  tweetStream.on('tweet', function (tweet) {
    WebSockets.clients.forEach((client) => {
      //Sending the tweet object to each socket client
      client.send(JSON.stringify({
        'user': {
          'screenName': tweet.user.screen_name,
          'name': tweet.user.name,
          'profileImageUrl': tweet.user.profile_image_url
        },
        'tweet': {
          'text': tweet.text
        }
      }));
    });
  });

  //On socket connection close
  ws.on('close', () => console.log('Client disconnected'));
});

