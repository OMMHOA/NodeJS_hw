var requireOption = require('../common').requireOption;

/**
 * If the user is not the owner of the res.tpl.book and is not an admin
 * redirect to /home
 */
module.exports = function (objectrepository) {

    var bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {

        return next();
    };

};
