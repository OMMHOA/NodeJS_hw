var softAuthMW = require('../middleware/generic/auth/softAuth');
var renderMW = require('../middleware/generic/render/render');

var getBookMW = require('../middleware/book/getBook');
var authOnBookMW = require('../middleware/book/authOnBook');

module.exports = function (app) {
    var objectRepository = {
        bookModel: bookModel
    };

    app.use('/book/:bookid',
        softAuthMW(objectRepository),
        getBookMW(objectRepository),
        renderMW(objectRepository, 'book')
    );

    app.use('/book/edit/:bookid',
        hardAuthMW(objectRepository),
        getBookMW(objectRepository),
        authOnBookMW(objectRepository),
        renderMW(objectRepository, 'book')
    );

};
