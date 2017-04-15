var Schema = require('mongoose').Schema;
var db = require('../config/db');

var User = db.model('User', {
    name: String,
    email: String,
    password: String,
    image: String,
    city: String,
    address: String,
    postalCode: String,
    sex: String,
    dateOfBirth: Date,
    dateOfRegistration: Date,
    ownedBooks: [Schema.Types.ObjectId],
    lentBooks: [Schema.Types.ObjectId],
    borrowedBooks: [Schema.Types.ObjectId],
    bookHistory: [Schema.Types.ObjectId]
});

module.exports = User;