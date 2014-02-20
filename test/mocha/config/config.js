require('should');

describe('<Unit Test>', function() {
    describe('Development Configuration', function() {

        var config;

        beforeEach(function(done) {
            config = require('../../../config/config.js')('development');
            done();
        });

        it('should load the common configurations', function(next) {
            config.should.have.property(['root', 'port', 'templateEngine',
                                         'sessionSecret']);
            next();
        });

        it('should load the development-specific configurations',
           function(next) {
            config.should.have.property('mode', 'development');
            config.should.have.property('app');
            config.app.should.have.property('name');
            next();
        });
    });
});
