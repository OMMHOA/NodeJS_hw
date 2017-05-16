/**
 * If the user is not logged in, redirects to /
 * If the user is logged in, sets the res.tpl.loggedIn value to true
 * If the user is an admin, sets res.tpl.isAdmin to true
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
    	console.log("hardAuth");
    	// if admin
    	// if (typeof req.session.userid === 'undefined') {
    	// 	res.tpl.isLoggedIn = false;
     //  		return res.redirect('/');
    	// }
    	// res.tpl.isLoggedIn = true;
        return next();
    };
};
