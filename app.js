var express = require('express')
  , episodes = require('episodes')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/until/:season/:episode', episodes.until);
app.get('/until/next', episodes.untilNext);
app.get('/next', episodes.next);
app.get('/', episodes.all);
app.get('/:season', episodes.season);
app.get('/:season/:episode', episodes.episode);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});