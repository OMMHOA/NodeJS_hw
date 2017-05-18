var requireOption = require('../common').requireOption;

/**
 * Get the city for the user
 */

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
    	console.log("getCityOfUser");

        return next();
    };

};
