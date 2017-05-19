/**
 * If the user is not logged in, redirects to /
 * If the user is logged in, sets the res.tpl.loggedIn value to true
 * If the user is an admin, sets res.tpl.isAdmin to true
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
    	console.log("hardAuth");
        if (res.tpl.user && res.tpl.book && (res.tpl.user.isAdmin || res.tpl.user._id.equals(res.tpl.book.user_id))) {
            return next();
        }
        return res.redirect('/');
    };
};
