var softAuthMW = require('../middleware/generic/auth/softAuth');
var hardAuthMW = require('../middleware/generic/auth/hardAuth');
var renderMW = require('../middleware/generic/render');

var getBookMW = require('../middleware/book/getBook');
var updateBookMW = require('../middleware/book/updateBook');
var deleteBookMW = require('../middleware/book/deleteBook');

var getUserMW = require('../middleware/user/getUser');

var bookModel = require('../models/book');
var userModel = require('../models/user');

module.exports = function (app) {
    var objectRepository = {
        bookModel: bookModel,
        userModel: userModel
    };

    app.get('/book/edit/:bookid',
        softAuthMW(objectRepository),
        getUserMW(objectRepository),
        getBookMW(objectRepository),
        hardAuthMW(objectRepository),
        renderMW(objectRepository, 'edit_book')
    );

    app.post('/book/edit/:bookid',
        softAuthMW(objectRepository),
        getUserMW(objectRepository),
        getBookMW(objectRepository),
        hardAuthMW(objectRepository),
        updateBookMW(objectRepository),
        renderMW(objectRepository, 'book')
    );

    app.post('/book/delete/:bookid',
        softAuthMW(objectRepository),
        getUserMW(objectRepository),
        getBookMW(objectRepository),
        hardAuthMW(objectRepository),
        deleteBookMW(objectRepository),
        function (req, res, next) {
            res.redirect('/');
        }
    );

    app.use('/book/:bookid',
        softAuthMW(objectRepository),
        getBookMW(objectRepository),
        getUserMW(objectRepository),
        renderMW(objectRepository, 'book')
    );
};
