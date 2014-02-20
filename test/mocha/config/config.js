require('should');

describe('<Unit Test>', function() {
    describe('Development Configuration', function() {

        var config;

        beforeEach(function(done) {
            config = require('../../../config/config.js')('development', 2345);
            done();
        });

        it('should load the common configurations', function(next) {
            config.should.have.property(['root', 'templateEngine',
                                         'sessionSecret']);
            config.should.have.property('port', 2345);
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

    describe('Test Configuration', function() {

        var config;

        beforeEach(function(done) {
            config = require('../../../config/config.js')('test', 4000);
            done();
        });

        it('should load the common configurations', function(next) {
            config.should.have.property(['root', 'templateEngine',
                                         'sessionSecret']);
            config.should.have.property('port', 4000);
            next();
        });

        it('should load the test-specific configurations',
           function(next) {
            config.should.have.property('mode', 'test');
            config.should.have.property('app');
            config.app.should.have.property('name');
            next();
        });
    });

    describe('Production Configuration', function() {

        var config;

        beforeEach(function(done) {
            config = require('../../../config/config.js')('production', 6000);
            done();
        });

        it('should load the common configurations', function(next) {
            config.should.have.property(['root', 'templateEngine',
                                         'sessionSecret']);
            config.should.have.property('port', 6000);
            next();
        });

        it('should load the production-specific configurations',
           function(next) {
            config.should.have.property('mode', 'production');
            config.should.have.property('app');
            config.app.should.have.property('name');
            next();
        });
    });
});
