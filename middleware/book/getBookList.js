var requireOption = require('../common').requireOption;

/**
 * Get the book list and put the books on res.tpl.books
 */

module.exports = function (objectrepository) {

    var bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {
        bookModel.find({}, function (err, results) {
            if (err) {
                return next(err);
            }
            console.log('getBookList called');
            res.tpl.books = results;
            return next();
        });
    };

};