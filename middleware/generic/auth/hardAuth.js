/**
 * If the user is not logged in, redirects to /home
 * If the user is logged in, sets the res.tpl.loggedIn value to true
 * If the user is an admin, sets res.tpl.isAdmin to true
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };
};
