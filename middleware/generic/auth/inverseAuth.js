/**
 * If the user is logged in, redirects to /
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
    	// if (typeof req.session.userid !== 'undefined') {
    	// 	res.tpl.isLoggedIn = true;
     //  		return res.redirect('/');
    	// }
    	// res.tpl.isLoggedIn = false;
    	console.log("inverse Auth");
        return next();
    };

};
