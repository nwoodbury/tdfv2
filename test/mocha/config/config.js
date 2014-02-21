/* jshint expr:true */

var Q = require('q');
require('should');

describe('<Unit Test>', function() {
    describe('Development Configuration', function() {

        var config;
        var failed;

        beforeEach(function(done) {
            Q.nfcall(require('../../../config/config.js'),
                     'development', 2345).
            then(function(r_config) {
                config = r_config;
                failed = false;
            }).
            fail(function() {
                failed = true;
            }).
            fin(function() {
                done();
            });
        });

        it('should not fail to load', function(next) {
            failed.should.not.be.ok;
            next();
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
        var failed;

        beforeEach(function(done) {
            Q.nfcall(require('../../../config/config.js'),
                     'test', 4000).
            then(function(r_config) {
                config = r_config;
                failed = false;
            }).
            fail(function() {
                failed = true;
            }).
            fin(function() {
                done();
            });
        });

        it('should not fail to load', function(next) {
            failed.should.not.be.ok;
            next();
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
        var failed;

        beforeEach(function(done) {
            Q.nfcall(require('../../../config/config.js'),
                     'production', 6000).
            then(function(r_config) {
                config = r_config;
                failed = false;
            }).
            fail(function() {
                failed = true;
            }).
            fin(function() {
                done();
            });
        });

        it('should not fail to load', function(next) {
            failed.should.not.be.ok;
            next();
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

    describe('Undefined Configuration', function() {
        var failed;

        beforeEach(function(done) {
            Q.nfcall(require('../../../config/config.js'),
                     'bogus', 6000).
            then(function() {
                failed = false;
            }).
            fail(function() {
                failed = true;
            }).
            fin(function() {
                done();
            });
        });

        it('should not fail to load', function(next) {
            failed.should.be.ok;
            next();
        });
    });
});
