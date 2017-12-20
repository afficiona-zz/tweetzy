# Tweetzy
## React/Redux app to show streaming twitter feed

It uses react library to show streaming tweets. The twitter streaming API is integrated in the node server and is served to the client via the websocket connection.

## Server
The server is setup in server.js file. This file is remotely hosted on heroku(ws://tweety-afficiona.herokuapp.com). It uses the Twitter's streaming API to fetch tweets and then send each tweets as JSON object to the client via ws(Websocket) connection.

## Client
The client creates a websocket connection to the above mentioned ws url. On each tweet received, redux reducer saves it in the store and react component consumes the data and renders it to the view.

## Setup

### Dependencies
Install the dependencies: `npm install`

### Run
`npm run start-client`

### Build production
`npm run build`
