var softAuthMW = require('../middleware/generic/auth/softAuth');
var hardAuthMW = require('../middleware/generic/auth/hardAuth');
var renderMW = require('../middleware/generic/render');
var inverseAuthMW = require('../middleware/generic/auth/inverseAuth');
var logoutMW = require('../middleware/generic/logout');

var getBookListMW = require('../middleware/book/getBookList');
var getBookListWithCityMW = require('../middleware/book/filter/getBookListWIthCity');
var getBookListWithStatusMW = require('../middleware/book/filter/getBookListWithStatus');
var getBookListLikeTitleMW = require('../middleware/book/search/getBookListLikeTitle');

var checkUserLoginMW = require('../middleware/user/checkUserLogin');
var getCityOfUserMW = require('../middleware/user/getCityOfUser');
var getUserMW = require('../middleware/user/getUser');

var bookModel = require('../models/book');
var userModel = require('../models/user');

module.exports = function (app) {
    var objectRepository = {
        userModel: userModel,
        bookModel: bookModel
    };

    app.get('/',
        function (req, res, next) {
            console.log('/');
            return next();
        },
        function (req, res, next) {
            console.log('redirecting to home');
            return res.redirect('/home')
        }
    );

    app.use('/home',
        softAuthMW(objectRepository),
        getUserMW(objectRepository),
        getBookListMW(objectRepository),
        renderMW(objectRepository, 'home')
    );

    app.post('/search',
        softAuthMW(objectRepository),
        getUserMW(objectRepository),
        getBookListLikeTitleMW(objectRepository),
        getBookListWithCityMW(objectRepository),
        getBookListWithStatusMW(objectRepository),
        renderMW(objectRepository, 'home')
    );

    app.get('/search',
        function (req, res, next) {
            res.redirect('/');
        }
    );

    app.use('/login',
        inverseAuthMW(objectRepository),
        checkUserLoginMW(objectRepository),
        function (req, res, next) {
            res.redirect('/');
        }
    );

    app.use('/logout',
        logoutMW(objectRepository),
        function (req, res, next) {
            res.redirect('/');
        }
    );
};
