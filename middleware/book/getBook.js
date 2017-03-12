var requireOption = require('../common').requireOption;

/**
 * Get the book for the book param
 *  - if there is no such book, redirect to /home
 *  - if there is one, put it on res.tpl.book
 */

module.exports = function (objectrepository) {

    var bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {

        return next();
    };

};