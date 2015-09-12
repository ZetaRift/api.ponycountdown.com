var movies = [
    {"name": "My Little Pony: Equestria Girls", "time": "2013-06-16T00:00:00.000Z", "universe":"equestria-girls"},
    {"name": "My Little Pony: Equestria Girls – Rainbow Rocks", "time": "2014-09-27T00:00:00.000Z", "universe":"equestria-girls"},
    {"name": "My Little Pony: Equestria Girls – Friendship Games", "time": "2015-09-26T00:00:00.000Z", "universe":"equestria-girls"}
];

exports.all = function(req, res){
    res.jsonp(movies);
};