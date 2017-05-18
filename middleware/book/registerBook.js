/**
 * registers book into db using the given params.
 */
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var BookModel = requireOption(objectrepository, 'bookModel');
    var UserModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        console.log('register book');
        var book = new BookModel();
        book.title = req.body.title;
        book.writer = req.body.writer;
        book.image = 'http://placehold.it/150x150';
        book.timesLent = 0;
        book.location = 0;
        book.state = req.body.state;
        UserModel.findOne({id: req.user.id}, function (err, result) {
            if (err || !result) {
                console.log('error at finding user');
                return res.redirect('/registration');
            }
            book.user_id = result._id;
            book.save(function(err){
                if (err) console.log('save unsuccessful');
                return next();
            });
        });
    };

};
