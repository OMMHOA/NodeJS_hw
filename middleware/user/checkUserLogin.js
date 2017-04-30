var requireOption = require('../common').requireOption;

/**
 * This middleware loads the user from model and checks the credentials,
 * if they are ok, set session values and redirect to /
 * if they are wrong, set error message
 */
module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
    console.log('checkUserLogin');
    //not enough parameter
    if ((typeof req.body === 'undefined') || 
    	(typeof req.body.id === 'undefined') ||
      (typeof req.body.password === 'undefined')) {
        console.log('not enough parameters');
        return next();
    }


    //lets find the user
    userModel.findOne({id: req.body.id}, function (err, result) {
      if ((err) || (!result)) {
        res.tpl.error.push('Login error!');
        console.log('login error');
        return next();
      }

      //check password
      if (result.password !== req.body.password) {
        res.tpl.error.push('Wrong password!');
        console.log('wrong pass');
        return next();
      }

      //login is ok, save id to session
      req.session.userid = result._id;

      //redirect to / so the app can decide where to go next
      return res.redirect('/');
    });
  };

};