/**
 * If the user is logged in:
 *  - sets tpl.isLoggedIn to true
 *  - redirects to /
 * else it sets tpl.isLoggedIn to false
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("inverse Auth");
    	if (typeof req.session.userid !== 'undefined') {
    		console.log('user is logged in');
      		return res.redirect('/');
    	}
    	res.tpl.isLoggedIn = false;
        return next();
    };

};
