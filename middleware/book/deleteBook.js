var requireOption = require('../common').requireOption;

/**
 * Delete the book object
 */
module.exports = function (objectrepository) {

    var bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {
    	console.log("deleteBook");
        return next();
    };

};