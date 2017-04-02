var requireOption = require('../common').requireOption;

/**
 * Get the user for the userid param if the user is logged in
 *  - if there is no such user, redirect to /home
 *  - if there is one, it sets res.tpl.user
 */

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
    	if (res.tpl.isLoggedIn) {
	    	userModel.findOne({}, function(err, result) {
	    		if (err) {
	    			console.log('error at getuser');
	    			return req.redirect('/home');
	    		}
	    		res.tpl.user = result;
	    	});
	    	console.log("getUser");
	    }
	    return next();
    };

};
