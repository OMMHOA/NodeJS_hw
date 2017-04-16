/**
 * if user in the registration parameters already exists sets tpl.error and redirects to /registration
 */
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        console.log('check user exist');
        userModel.findOne({id: req.body.userId}, function(err, user) {
            if (err) {
                console.log('error at check user exist');
                return req.redirect("/");
            }
            if (!user) return next();
            req.session.error = "Felhasználónév foglalt!";
            return res.redirect("/registration");
        });
    };

};
