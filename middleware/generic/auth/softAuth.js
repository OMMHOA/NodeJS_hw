/**
 * If the user is logged in, sets res.tpl.loggedIn to true
 * If the user is an admin, sets res.tpl.isAdmin to true
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
    	console.log("soft auth called");
    	if (typeof req.session.userid === 'undefined') {
	     	res.tpl.isLoggedIn = false;
	    } else {
	    	res.tpl.isLoggedIn = true;
	    }
        return next();
    };
};