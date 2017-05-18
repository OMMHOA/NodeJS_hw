var requireOption = require('../../common').requireOption;

/**
 * Filter books which are only at owner if req.body.lendable is checked
 */

module.exports = function (objectrepository) {

    var bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {
		console.log("getBookListWithStatus");
		if (req.body.lendable) {
            var books = res.tpl.books;
            var filteredBooks = [];
            for (var i = 0; i < books.length; i++) {
                if (books[i].location === 0) {
                    filteredBooks.push(books[i]);
                }
            }
            res.tpl.books = filteredBooks;
        }
        return next();
    };

};