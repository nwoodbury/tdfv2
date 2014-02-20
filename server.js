//=============================================================================
//  Module Dependencies
//=============================================================================

var express = require('express');

require('colors');

//=============================================================================
//  Main Application Entry (order is important)
//=============================================================================

// Load Configurations (set default variables if not passed in the process)
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log(process.env.PORT);
process.env.PORT = process.env.PORT || 3000;
console.log(process.env.PORT);

// Initializing system variables
var config = require('./config/config')(process.env.NODE_ENV,
                                        process.env.PORT);

module.exports.start = function(done) {
    var app = express();

    app.listen(config.port, function() {
        console.log(('App started, listening on port ' +
                     config.port).green);

        if (done) {
            return done(null, app);
        }
    }).on('error', function(e) {
        if (e.code === 'EADDRINUSE') {
            console.log('Address in use. Is the server already running?'.red);
        }
        if (done) {
            return done(e);
        }
    });
};

module.exports.start();
