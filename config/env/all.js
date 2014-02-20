var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');

module.exports = function(port) {
    return {
        root: rootPath,
        port: port,
        //db: process.env.MONGOHQ_URL,
        templateEngine: 'swig',

        // The secret should be set to a non-guessable string that is used to
        // compute a session hash
        sessionSecret: 'harrymarkowitz'
    };
};
