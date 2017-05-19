var expect = require('chai').expect;
var inverseAuthMW = require('../../../middleware/generic/auth/inverseAuth');

describe('inverse auth MW', function () {
    it('should call next if the userid in session is undefined', function (done) {
        var reqMock = {
            session: {}
        };
        var resMock = {
            tpl: {}
        };
        var nextMock = function () {
            expect(resMock.tpl.isLoggedIn).be.eql(false);
            done();
        };
        var fakeObjectRepo = {};

        inverseAuthMW(fakeObjectRepo)(reqMock, resMock, nextMock);
    });

    it('should redirect to / if the userid in session is not undefined', function (done) {
        var reqMock = {
            session: {
                userid: 1
            }
        };
        var resMock = {
            tpl: {},
            redirect: function(newUrl) {
                expect(newUrl).be.eql('/');
                done();
            }
        };
        var nextMock = function () {};
        var fakeObjectRepo = {};

        inverseAuthMW(fakeObjectRepo)(reqMock, resMock, nextMock);
    });
});
