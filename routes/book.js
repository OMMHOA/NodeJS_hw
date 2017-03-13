var softAuthMW = require('../middleware/generic/auth/softAuth');
var hardAuthMW = require('../middleware/generic/auth/hardAuth');
var renderMW = require('../middleware/generic/render');

var getBookMW = require('../middleware/book/getBook');
var authOnBookMW = require('../middleware/book/authOnBook');
var updateBookMW = require('../middleware/book/updateBook');

module.exports = function (app) {
    var objectRepository = {
        bookModel: "asd"
    };

    app.use('/book/:bookid',
        softAuthMW(objectRepository),
        getBookMW(objectRepository),
        renderMW(objectRepository, 'book')
    );

    app.get('/book/edit/:bookid',
        hardAuthMW(objectRepository),
        getBookMW(objectRepository),
        authOnBookMW(objectRepository),
        renderMW(objectRepository, 'book')
    );

    app.post('/book/edit/:bookid',
        hardAuthMW(objectRepository),
        getBookMW(objectRepository),
        authOnBookMW(objectRepository),
        updateBookMW(objectRepository),
        renderMW(objectRepository, 'book')
    );
};
