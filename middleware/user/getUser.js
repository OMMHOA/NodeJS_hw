var requireOption = require('../common').requireOption;

/**
 * Get the user for the userid param
 *  - if there is no such user, redirect to /user
 *  - if there is one, it sets res.tpl.user
 */

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
    	console.log("getUser");
        return next();
    };

};
