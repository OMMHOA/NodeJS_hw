/**
 * registers user into db using the given params
 * if there is already a user registered with that name, sets tpl.error and redirects to /registration
 */
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var UserModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
    	console.log('register user');
    	var user = new UserModel();
    	user.id = req.body.userId;
    	user.name = req.body.name;
    	user.password = req.body.password;
    	user.city = req.body.city;
    	user.isAdmin = req.body.admin === 'aloha'; // this is the admin key so watch out
    	user.save(function(err){
    	    if (err) {
                console.log('save user unsuccessful');
                return res.redirect('/registration');
            }
    	    req.user = user;
    	    req.session.userid = user._id;
            return next();
        });
    };

};