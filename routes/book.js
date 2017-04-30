var softAuthMW = require('../middleware/generic/auth/softAuth');
var hardAuthMW = require('../middleware/generic/auth/hardAuth');
var renderMW = require('../middleware/generic/render');

var getBookMW = require('../middleware/book/getBook');
var authOnBookMW = require('../middleware/book/authOnBook');
var updateBookMW = require('../middleware/book/updateBook');

var getUserMW = require('../middleware/user/getUser');

var bookModel = require('../models/book');
var userModel = require('../models/user');

module.exports = function (app) {
    var objectRepository = {
        bookModel: bookModel,
        userModel: userModel
    };

    app.get('/book/edit/:bookid',
        hardAuthMW(objectRepository),
        getBookMW(objectRepository),
        authOnBookMW(objectRepository),
        renderMW(objectRepository, 'edit_book')
    );

    app.post('/book/edit/:bookid',
        hardAuthMW(objectRepository),
        getBookMW(objectRepository),
        authOnBookMW(objectRepository),
        updateBookMW(objectRepository),
        renderMW(objectRepository, 'book')
    );

    app.use('/book/:bookid',
        softAuthMW(objectRepository),
        getBookMW(objectRepository),
        getUserMW(objectRepository),
        renderMW(objectRepository, 'book')
    );
};
