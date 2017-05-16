/**
 * Validates the required parameters for registration
 * if validation fails, redirects to /registration
 */

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    return function (req, res, next) {
    	console.log("checkRegistrationParams");
        if (!req.body.userId || !req.body.password || !req.body.name || !req.body.email || !req.body.city || !req.body.address
            || !req.body.postal || !req.body.title || !req.body.writer || !req.body.pageCount || !req.body.state || !req.body.language) {
            req.session.error = "Minden szükséges mező kitöltése kötezelő!";
            return res.redirect("/registration");
        }
        return next();
    };

};
