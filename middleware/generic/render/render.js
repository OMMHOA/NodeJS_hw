/**
 * Using the template engine render the values into the template
 * - except if the value is 'home', set tpl.error
 */
module.exports = function (objectrepository, viewName) {

    return function (req, res) {
        res.end('Render: ' + viewName);
        //res.render(viewName, res.tpl);
    };
};
