# Ponycountdown API

###Format
Responses are in JSON format, unless a ?callback parameter is supplied, which will provide a JSONP response.

    http://api.ponycountdown.com/ will give a plain JSON response, [...]  

    http://api.ponycountdown.com?callback=JSON_CALLBACK will wrap the response as JSON_CALLBACK([...]);

#Resources

## GET /
Returns a full list of all episodes as a JSON array.

#### example request
    GET http://api.ponycountdown.com/

#### example response
    [
        {"name": "Friendship is Magic - Part 1", "time": "2010-10-10T12:00:00.000Z", "season": 1, "episode": 1, "duration": 20},
        {"name": "Friendship is Magic - Part 2", "time": "2010-10-22T12:00:00.000Z", "season": 1, "episode": 2, "duration": 20}
        ...
    ]


## GET /:season
Returns a full list of all episodes in the given season as a JSON array. Returns an empty array if there are no known episodes for the given season.

#### example request
    GET http://api.ponycountdown.com/2

#### example response
    [
        {"name": "The Return of Harmony - Part 1", "time": "2011-09-17T12:00:00.000Z", "season": 2, "episode": 1, "duration": 20},
        {"name": "The Return of Harmony - Part 2", "time": "2011-09-24T13:00:00.000Z", "season": 2, "episode": 2, "duration": 20}
        ...
    ]


## GET /:season/:episode
Returns the given episode as a JSON object. Returns an empty array if the episode was not found.

#### example request
    GET http://api.ponycountdown.com/2/20

#### example response
    {"name": "It's About Time", "time": "2012-03-10T18:00:00.000Z", "season": 2, "episode": 20, "duration": 20}


## GET /next
Returns the next episode to air as a JSON object. Returns an empty array if no upcoming episode was found :(

#### example request
    GET http://api.ponycountdown.com/next

#### example response
    {"name": "Princess Twilight Part 1", "time": "2013-11-23T15:00:00.000Z", "season": 4, "episode": 1, "duration": 20}


## GET /until/:season/:episode
Returns the time until the given episode in milliseconds, wrapped in a JSON array. Returns an empty array if the episode was not found.

#### example request
    GET http://api.ponycountdown.com/until/4/2

#### example response
    [
      529729519
    ]


## GET /until/next
Returns the time until the next episode to air in milliseconds, wrapped in a JSON array. Returns an empty array if no upcoming episode was found.

#### example request
    GET http://api.ponycountdown.com/until/next

#### example response
    [
      529729519
    ]