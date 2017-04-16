var renderMW = require('../middleware/generic/render');
var inverseAuthMW = require('../middleware/generic/auth/inverseAuth');
var checkRegistrationParamsMW = require('../middleware/registration/checkRegistrationParams');
var checkUserExistMW = require('../middleware/registration/checkUserExist');

var registerUserMW = require('../middleware/user/registerUser');

var updateBookMW = require('../middleware/book/updateBook');

var bookModel = require('../models/book');
var userModel = require('../models/user');

module.exports = function (app) {
    var objectRepository = {
        bookModel : bookModel,
        userModel : userModel
    };

    app.get('/registration',
        inverseAuthMW(objectRepository),
        renderMW(objectRepository, 'registration')
    );

    app.post('/registration',
        inverseAuthMW(objectRepository),
        checkRegistrationParamsMW(objectRepository),
        checkUserExistMW(objectRepository),
        registerUserMW(objectRepository),
        updateBookMW(objectRepository),
        function (req, res, next) {
            res.redirect('/login');
        }
    );
};
