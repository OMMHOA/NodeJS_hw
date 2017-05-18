var requireOption = require('../common').requireOption;
var ObjectId = require('mongoose').Types.ObjectId;
/**
 * Get the book for the book param
 *  - if there is no such book, redirect to /home
 *  - if there is one, put it on res.tpl.book
 */

module.exports = function (objectrepository) {

    var bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {
        console.log("getBook");
    	bookModel.findById(req.param('bookid'), function(err, result){
			if ((err) || (!result)) {
			    console.log('book not found');
				return res.redirect('/home');
			}
			
			res.tpl.book = result;
        	return next();
    	});
    };

};