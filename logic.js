var Twitter = require('twitter');

var omdbApi = require('omdb-client');

var spotify = require('spotify');


//  twitter api key storage in .env file
var client = new Twitter({
  consumer_key: 'process.env.TWITTER_CONSUMER_KEY',
  consumer_secret:'process.env.TWITTER_CONSUMER_SECRET',
  access_token_key: 'process.env.TWITTER_ACCESS_TOKEN_KEY',
  access_token_secret: 'process.env.TWITTER_ACCESS_TOKEN_SECRET'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

//  omdb client access data
var params = {
    apiKey: 'XXXXXXX',
    query: 'Terminator',
    year: 2012
}
omdbApi.search(params, function(err, data) {
    // process response...
});

//  spotify access data
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});