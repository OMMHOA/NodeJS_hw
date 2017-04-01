var requireOption = require('../common').requireOption;

/**
 * Get the book for the book param
 *  - if there is no such book, redirect to /home
 *  - if there is one, put it on res.tpl.book
 */

module.exports = function (objectrepository) {

    var bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {
    	bookModel.findOne({
    		id: req.params.id
    	}, function(err, result){
			if ((err) || (!result)) {
				return req.redirect('/home');
			}
            
            switch(result.location){
                case 0:
                    result.location = 'Tulajdonosnál';
                    break;
                case 1:
                    result.location = 'Úton';
                    break;
                case 2:
                    result.location = 'Kölcsönzőnél';
                    break;
                case 3:
                    result.location = 'Eltűnt';
                    break;
            }
			res.tpl.book = result;
    		console.log("getBook");
        	return next();
    	});
    };

};