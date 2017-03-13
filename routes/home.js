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

module.exports = function (app) {
    var objectRepository = {
        userModel: userModel
    };

    app.use('/',
    function(req, res, next) {
        return res.redirect('/home');
    });

    app.use('/home',
        softAuthMW(objectRepository),
        getBookListMW(objectRepository),
        renderMW(objectRepository, 'home')
    );

    app.use('/filterByCity',
        softAuthMW(objectRepository),
        getCityOfUserMW(objectRepository),
        getBookListWithCityMW(objectRepository),
        renderMW(objectRepository, 'home')
    );

    app.use('/filterByStatus',
        hardAuthMW(objectRepository),
        getBookListWithStatusMW(objectRepository, 'available'),
        renderMW(objectRepository, 'home')
    );

    app.use('/search',
        getBookListLikeTitleMW(objectRepository),
        renderMW(objectRepository, 'home')
    );

    app.use('/login',
        inverseAuthMW(objectRepository),
        checkUserLoginMW(objectRepository),
        function (req, res, next) {
            res.redirect('/');
        }
    );

    app.use('logout',
        logoutMW(objectRepository),
        function (req, res, next) {
            res.redirect('/');
        }
    );
};
