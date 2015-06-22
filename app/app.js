var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());


var tweets = [
  {text: "Test tweet 2", time: new Date().getTime() - 1000},
  {text: "Test tweet 1", time: new Date().getTime()},
];

app.use(express.static(__dirname + '/public'));

app.get('/ajax', function(request, response) {
  response.type('json');
  response.end(JSON.stringify({tweets:tweets}));
});

app.post('/ajax', function(request, response) {
  var newTweet = {text: request.body.tweet, time: new Date().getTime()};
  tweets.push(newTweet);
  response.type('json');
  response.end(JSON.stringify(newTweet));
});

var server = app.listen(8080);