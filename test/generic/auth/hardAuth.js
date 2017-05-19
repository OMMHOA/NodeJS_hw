var expect = require('chai').expect;
var objectId = require('mongoose').Types.ObjectId;
var hardAuthMW = require('../../../middleware/generic/auth/hardAuth');

describe('hard auth MW', function () {
    it('should redirect to / if res.tpl.user is falsey', function (done) {
        var reqMock = {};
        var resMock = {
            tpl: {},
            redirect: function(newUrl) {
                expect(newUrl).be.eql('/');
                done();
            }
        };
        var nextMock = function () {};
        var fakeObjectRepo = {};

        hardAuthMW(fakeObjectRepo)(reqMock, resMock, nextMock);
    });

    it('should redirect to / if res.tpl.book is falsey', function (done) {
        var reqMock = {};
        var resMock = {
            tpl: {
                user: true
            },
            redirect: function(newUrl) {
                expect(newUrl).be.eql('/');
                done();
            }
        };
        var nextMock = function () {};
        var fakeObjectRepo = {};

        hardAuthMW(fakeObjectRepo)(reqMock, resMock, nextMock);
    });

    it('should redirect to / if user id and book owner userid are not equal', function (done) {
        var reqMock = {};
        var resMock = {
            tpl: {
                user: {
                    _id: objectId('AAAAAAAAAAAA'),
                    isAdmin: false
                },
                book: {
                    user_id: objectId('BBBBBBBBBBBB')
                }
            },
            redirect: function(newUrl) {
                expect(newUrl).be.eql('/');
                done();
            }
        };
        var nextMock = function () {};
        var fakeObjectRepo = {};

        hardAuthMW(fakeObjectRepo)(reqMock, resMock, nextMock);
    });

    it('should call next if the user id and book owner userid are equal', function (done) {
        var reqMock = {
            session: {}
        };
        var resMock = {
            tpl: {
                user: {
                    _id: objectId('AAAAAAAAAAAA'),
                    isAdmin: false
                },
                book: {
                    user_id: objectId('AAAAAAAAAAAA')
                }
            }
        };
        var nextMock = function () {
            done();
        };
        var fakeObjectRepo = {};

        hardAuthMW(fakeObjectRepo)(reqMock, resMock, nextMock);
    });

    it('should call next if the user is an admin', function (done) {
        var reqMock = {
            session: {}
        };
        var resMock = {
            tpl: {
                user: {
                    _id: objectId('AAAAAAAAAAAA'),
                    isAdmin: true
                },
                book: {
                    user_id: objectId('BBBBBBBBBBBB')
                }
            }
        };
        var nextMock = function () {
            done();
        };
        var fakeObjectRepo = {};

        hardAuthMW(fakeObjectRepo)(reqMock, resMock, nextMock);
    });
});