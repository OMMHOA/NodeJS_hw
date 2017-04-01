/**
 * User model (mock)
 * @constructor
 */
var User = function () {
};

/**
 * An instance
 * @type {{id: number, name: string, email: string, password: string, profilePicture: string, city: string, address: string, postalCode: string, sex: string, dateOfBirth: string, dateOfRegistration: string, ownedBooks: Array, lentBooks: Array, borrowedBooks: Array, bookHistory: Array}}
 */
var UserInstanceMock = {
    id: 1,
    name: 'Lorem',
    email: 'lorem@example.org',
    password: 'asdasd',
    image: 'http://placehold.it/150x150',
    city: 'budapest',
    address: 'Irinyi Jozsef u. 42',
    postalCode: '1117',
    sex: 'female',
    dateOfBirth: '2000.01.01.',
    dateOfRegistration: '2017.12.12.',
    ownedBooks: [],
    lentBooks: [],
    borrowedBooks: [],
    bookHistory: []
};

/**
 * Find one element with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
User.findOne = function (criteria, cb) {

    //returns 1 mocked item
    return cb(null, UserInstanceMock);
};

/**
 * Find all elements with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
User.find = function (criteria, cb) {

    //returns 3 mocked item
    return cb(null, [UserInstanceMock, UserInstanceMock, UserInstanceMock]);
};

/**
 * Save the item to the db
 * @param cb error first callback
 * @returns {*}
 */
User.prototype.save = function (cb) {
    return cb(null, this);
};

module.exports = User;