/**
 * Using the template engine render the values into the home template
 * - if tpl.loggedIn is true render 'homeLoggedIn'
 * - else render 'home'
 */
module.exports = function (objectrepository) {

    return function (req, res) {
        if (res.tpl.loggedIn && res.tpl.loggedIn === true) {
            res.end('Render: ' + 'homeLoggedIn');
        } else {
            res.end('Render: ' + 'home');
            //res.render('Home', res.tpl);
        }

    };
};

