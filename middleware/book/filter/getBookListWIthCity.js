var requireOption = require('../../common').requireOption;

/**
 * Get the book list where city param equals book.owner.city
 * - if there is no param, redirect to /home
 * - if everything is ok put the books on res.tpl.books
 */

module.exports = function (objectrepository) {

    var bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {

        return next();
    };

};