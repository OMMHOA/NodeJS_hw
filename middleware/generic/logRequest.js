/**
 * Logs the request into the console.
 */

module.exports = function () {
    return function (req, res, next) {
        console.log((new Date()).toISOString() + "\t" + req.method + "\t" + req.url);
        return next();
    };
};
