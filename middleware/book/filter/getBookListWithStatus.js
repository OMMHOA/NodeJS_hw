var requireOption = require('../../common').requireOption;

/**
 * Get the book list where state param equals book.title
 * - if there is no param, redirect to /home
 * - put the books on res.tpl.books
 */

module.exports = function (objectrepository, status) {

    var bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {

        return next();
    };

};