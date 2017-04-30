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
            
            switch(result.location){
                case 0:
                    res.tpl.bookLocation = 'Tulajdonosnál';
                    break;
                case 1:
                    res.tpl.bookLocation = 'Úton';
                    break;
                case 2:
                    res.tpl.bookLocation = 'Kölcsönzőnél';
                    break;
                case 3:
                    res.tpl.bookLocation = 'Eltűnt';
                    break;
            }

            switch(result.state){
                case 0:
                    res.tpl.bookState = 'Kiváló'
                    break;
                case 1:
                    res.tpl.bookState = 'Nagyon jó'
                    break;
                case 2:
                    res.tpl.bookState = 'Jó'
                    break;
                case 3:
                    res.tpl.bookState = 'Kicsit megviselt'
                    break;

            }
			res.tpl.book = result;
        	return next();
    	});
    };

};