var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("logout");
    	req.session.destroy(function (err) {
      		return next();
    	});
    };

};
