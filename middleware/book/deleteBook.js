var requireOption = require('../common').requireOption;

/**
 * Delete the book object
 */
module.exports = function (objectrepository) {

    var bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {
    	console.log("deleteBook");
        bookModel.remove({_id: res.tpl.book._id}, function(err){
            if (err) console.log('delete unsuccessful');
            return next();
        });
    };

};