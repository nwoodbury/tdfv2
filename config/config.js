// Utilize Lo-Dash utility library
var _ = require('lodash');

// Extend the base configuration in all.js with environment-specific
// configuration
module.exports = function(mode, port) {
    return _.extend(
        require(__dirname + '/../config/env/all.js')(port),
        require(__dirname + '/../config/env/' + mode + '.js') || {}
    );
};
