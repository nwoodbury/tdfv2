//=============================================================================
//  Module Dependencies
//=============================================================================

var express = require('express'),
    Q = require('q');

require('colors');

//=============================================================================
//  Main Application Entry (order is important)
//=============================================================================

// Load Configurations (set default variables if not passed in the process)
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 3000;

// Start up the app
Q.nfcall(require('./config/config'), process.env.NODE_ENV, process.env.PORT)
.then(function(config) {
    var app = express();
    var deferred = Q.defer();

    console.log(('\n\n[tdf] Starting app...').cyan);

    app.listen(config.port, function() {
        deferred.resolve(config.port);
    }).on('error', function(err) {
        deferred.reject(err);
    });

    return deferred.promise;
})
.then(function(port) {
    console.log(('[tdf] App successfully started; listening on port ' +
                 port).green);
})
.fail(function(err) {
    if (err.code === 'EADDRINUSE') {
        console.log('[tdf] Address in use. Is the server already running?'
                    .red);
    }
    else {
        console.log('[tdf] Unknown Error:'.red);
        console.log(err.stack);
    }
})
.fin(function() {
    console.log('[tdf] App is running\n\n'.green);
});
