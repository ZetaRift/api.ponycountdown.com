var express = require('express')
  , episodes = require('./episodes')
  , http = require('http');

var app = express();

app.get('/until/:season/:episode', episodes.until);
app.get('/until/next', episodes.untilNext);
app.get('/next', episodes.next);
app.get('/', episodes.all);
app.get('/:season', episodes.season);
app.get('/:season/:episode', episodes.episode);

http.createServer(app).listen(process.env.PORT || 3000);