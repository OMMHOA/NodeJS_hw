var requireOption = require('../../common').requireOption;

/**
 * Get the book list where title param is like book.title
 * - if there is no param, redirect to /home
 * - if everything is ok put the books on res.tpl.books
 */

module.exports = function (objectrepository) {

    var bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {
    	console.log("getBookListLikeTitle");
    	var query = req.body.title;
        bookModel.find({title: {$regex : query, $options: 'i'}}, function (err, results) {
            if (err) {
                console.log('book list not found');
                return next();
            }
            res.tpl.books = results;
            return next();
        });
    };

};
