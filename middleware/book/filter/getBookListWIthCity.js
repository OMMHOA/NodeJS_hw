var requireOption = require('../../common').requireOption;

/**
 * Get the book list where city param equals book.owner.city
 * - if there is no param, redirect to /home
 * - if everything is ok put the books on res.tpl.books
 */

module.exports = function (objectrepository) {

    var bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {
    	console.log("getBookListWithCity");
    	if (res.tpl.user) {
            var city = res.tpl.user.city;
        } else {
            return next();
        }
    	if (req.body.mycity) {
    	    console.log('city is checked');
            var books = res.tpl.books;
            var filteredBooks = [];
            for (var i = 0; i < books.length; i++) {
                if (books[i].city === city) {
                    filteredBooks.push(books[i]);
                }
            }
            res.tpl.books = filteredBooks;
        }
        return next();
    };

};