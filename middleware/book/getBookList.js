var requireOption = require('../common').requireOption;

/**
 * Get the book list and put the books on res.tpl.books
 */

module.exports = function (objectrepository) {

    var bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {
        console.log('getBookList called');
        bookModel.find({}, function (err, results) {
            if (err) {
                console.log('book list not found');
                return next();
            }
            res.tpl.books = results;
            return next();
        });
    };

};