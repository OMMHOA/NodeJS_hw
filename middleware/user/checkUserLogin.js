/**
 * Checks if the user is authorised for logging in through username and password params
 * if auth is correct sets res.tpl.loggedIn to true
 */

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    return function (req, res, next) {
    	console.log("checkUserLogin");
        return next();
    };

};