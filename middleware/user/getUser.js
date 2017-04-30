var requireOption = require('../common').requireOption;

/**
 * Get the user for the userid param if the user is logged in
 *  - if there is no such user, redirect to /home
 *  - if there is one, it sets res.tpl.user
 */

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        console.log("getUser");
        if (res.tpl.isLoggedIn === true) {
            console.log('logged in');
            userModel.findOne({_id: req.session.userid}, function(err, result) {
                if (err || (!result)) {
                    console.log('couldnt find user -.-');
                    res.tpl.isLoggedIn = false;
                } else {
                    console.log(result.name);
                    res.tpl.user = result;
                }
                return next();
            });
        } else {
            return next();
        }
    };

};
