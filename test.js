var Discogs = require("disconnect").Client;
var dis = new Discogs({userToken: 'xQSstXxQtGrcxUDRGSHJYjshQcuqYgbsBQlMKagH'});
var db = dis.database();

db.artist(137880, function(err, data) {
   console.log(data); 
}); 