var renderMW = require('../middleware/generic/render');
var inverseAuthMW = require('../middleware/generic/auth/inverseAuth');
var checkRegistrationParamsMW = require('../middleware/generic/checkRegistrationParams');

var registerUserMW = require('../middleware/user/registerUser');

var updateBookMW = require('../middleware/book/updateBook');

var bookModel = require('../models/book');

module.exports = function (app) {
    var objectRepository = {
        bookModel : bookModel
    };

    app.get('/registration',
        inverseAuthMW(objectRepository),
        renderMW(objectRepository, 'registration')
    );

    app.post('/registration',
        inverseAuthMW(objectRepository),
        checkRegistrationParamsMW(objectRepository),
        registerUserMW(objectRepository),
        updateBookMW(objectRepository),
        function (req, res, next) {
            res.redirect('/login');
        }
    );
};
