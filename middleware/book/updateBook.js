/**
 * Create (or update) book if we have the data for it
 * update if we have a res.tpl.book, create if we don't have
 *  - if there is no title, author, owner or any other required field, set tpl.error
 *  - if everything is ok redirect to /books/:bookid
 */

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {

        return next();
    };

};