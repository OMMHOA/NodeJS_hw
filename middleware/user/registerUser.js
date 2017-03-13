/**
 * registers user into db using the given params
 * if there is already a user registered with that name, sets tpl.error and redirects to /registration
 */
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    return function (req, res, next) {

        return next();
    };

};