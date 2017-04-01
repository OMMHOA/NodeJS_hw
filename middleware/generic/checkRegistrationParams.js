/**
 * Validates the required parameters for registration
 * if validation fails, sets tpl.error and redirects to /registration
 */

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    return function (req, res, next) {
    	console.log("checkRegistrationParams");
        return next();
    };

};
