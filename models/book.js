var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Book = db.model('Book',{
    title: String,
    writer: String,
    // userid
    user_id: Schema.Types.ObjectId,
    // 0 - at owner, 1 - on the way, 2 - at borrower, 3 - missing
    location: Number,
    timesLent: Number,
    // userid
    nowAt: Schema.Types.ObjectId,
    pageCount: String,
    genre: [String],
    // 0 - Perfect, 1 - Very good, 2 - Good, 3 - A bit weary
    state: Number,
    language: String,
    image: String,
    dateOfLastTimeLent: Date,
    dateOfRegistration: Date,
    city: String
});

module.exports = Book;