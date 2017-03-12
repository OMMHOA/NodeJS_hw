var softAuthMW = require('../middleware/generic/auth/softAuth');
var hardAuthMW = require('../middleware/generic/auth/hardAuth');
var renderHomeMW = require('../middleware/generic/render/renderHome');
var inverseAuthMW = require('../middleware/generic/auth/inverseAuth');

var getBookListMW = require('../middleware/book/getBookList');
var getBookListWithCityMW = require('../middleware/book/filter/getBookListWIthCity');
var getBookListWithStatusMW = require('../middleware/book/filter/getBookListWithStatus');
var getBookListLikeTitleMW = require('../middleware/book/search/getBookListLikeTitle');

var checkUserLoginMW = require('../middleware/user/checkUserLogin');

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
        renderHomeMW(objectRepository)
    );

    app.use('/filterByCity',
        hardAuthMW(objectRepository),
        getBookListWithCityMW(objectRepository),
        renderHomeMW(objectRepository)
    );

    app.use('/filterByStatus',
        hardAuthMW(objectRepository),
        getBookListWithStatusMW(objectRepository),
        renderHomeMW(objectRepository)
    );

    app.use('/search',
        getBookListLikeTitleMW(objectRepository),
        renderHomeMW(objectRepository)
    );

    app.use('/registration',
        inverseAuthMW(objectRepository),
        checkUserLoginMW(objectRepository),
        renderHomeMW(objectRepository)
    );
};
