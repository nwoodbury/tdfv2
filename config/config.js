// Utilize Lo-Dash utility library
var _ = require('lodash'),
    path = require('path'),
    fs = require('fs');

// Extend the base configuration in all.js with environment-specific
// configuration
module.exports = function(mode, port, cb) {
    var all_config = path.resolve('config/env/all.js');
    var mode_config = path.resolve('config/env/' + mode + '.js');

    fs.exists(mode_config, function(exists) {
        if (exists) {
            cb(null, _.extend(
                require(all_config)(port),
                require(mode_config) || {}
            ));
        }
        else {
            cb(new Error('Undefined Environment: ' + mode), null);
        }
    });
};
