var express = require('express');
var episodes = require('./episodes');
var movies = require('./movies');
var http = require('http');

var app = express();

app.get('/movies', movies.all);
app.get('/until/:season/:episode', episodes.until);
app.get('/until/next', episodes.untilNext);
app.get('/next', episodes.next);
app.get('/last', episodes.last);
app.get('/', episodes.all);
app.get('/:season', episodes.season);
app.get('/:season/:episode', episodes.episode);


http.createServer(app).listen(process.env.PORT || 3000);