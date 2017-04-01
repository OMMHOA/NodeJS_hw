/**
 * Task model (mock)
 * @constructor
 */
var Task = function () {
};

/**
 * An instance
 * @type {{id: number, title: string, writer: string, owner: number, location: number, timesLent: number, nowAt: number, pageCount: string, genre: [*], state: number, language: string, dateOfLastTimeLent: string, dateOfRegistration: string}}
 */
var TaskInstanceMock = {
    id: 1,
    title: 'A Négyszögletű Kerekerdő',
    writer: 'Lázár Ervin',
    // userid
    owner: 1,
    // 0 - at owner, 1 - on the way, 2 - at borrower, 3 - missing
    location: 0,
    timesLent: 0,
    // userid
    nowAt: 1,
    pageCount: '100-300',
    genre: ['Klasszikus'],
    // 0 - Perfect, 1 - Very good, 2 - Good, 3 - A bit weary
    state: 0,
    language: 'magyar',
    image: '/img/cover.png',
    dateOfLastTimeLent: '2017.12.11.',
    dateOfRegistration: '2017.12.10.'
};

/**
 * Find one element with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
Task.findOne = function (criteria, cb) {

    //returns 1 mocked item
    return cb(null, TaskInstanceMock);
};

/**
 * Find all elements with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
Task.find = function (criteria, cb) {

    //returns 3 mocked item
    return cb(null, [TaskInstanceMock, TaskInstanceMock, TaskInstanceMock, TaskInstanceMock]);
};

/**
 * Save the item to the db
 * @param cb error first callback
 * @returns {*}
 */
Task.prototype.save = function (cb) {
    return cb(null, this);
};

/**
 * Delete an object
 * @param cb
 * @returns {*}
 */
Task.prototype.remove = function (cb) {
    return cb(null);
};

module.exports = Task;