//=============================================================================
//  Module Dependencies
//=============================================================================

var express = require('express'),
    Q = require('q'),
    passport = require('passport'),
    fs = require('fs');
require('colors');

console.log(('\n\n[tdf] Starting app...').cyan);

//=============================================================================
//  Settings and Configurations
//=============================================================================

// Load Configurations (set default variables if not passed in the process)
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 3000;


//=============================================================================
// Start up the app
//=============================================================================

Q.nfcall(require('./config/config'), process.env.NODE_ENV, process.env.PORT)
.then(function(config) {
    var deferred = Q.defer();
    var app = express();


    // Bootstrap routes
    var routes_path = __dirname + '/app/routes';
    var walk = function(path) {
        fs.readdirSync(path).forEach(function(file) {
            var newPath = path + '/' + file;
            var stat = fs.statSync(newPath);
            if (stat.isFile()) {
                if (/(.*)\.(js$|coffee$)/.test(file)) {
                    require(newPath)(app, passport);
                }
            // We skip the app/routes/middlewares directory as it is meant to be
            // used and shared by routes as further middlewares and is not a
            // route by itself
            } else if (stat.isDirectory() && file !== 'middlewares') {
                walk(newPath);
            }
        });
    };
    walk(routes_path);

    // Express Settings
    require('./config/express')(app, config, passport/*, db*/);

    // Listen on desired port
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
