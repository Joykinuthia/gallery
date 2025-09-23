
// Update to have your correct username and password
var config = {};
config.mongoURI = {
    production: 'mongodb+srv://<joyrosekinuthia_db_user>:<S50WKZbIutgqWmTc>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://<joyrosekinuthia_db_user>:<S50WKZbIutgqWmTc>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://<joyrosekinuthia_db_user>:<S50WKZbIutgqWmTc>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority'
};
module.exports = config;
