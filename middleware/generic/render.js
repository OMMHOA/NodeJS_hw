/**
 * Using the template engine render the values into the template and generates header content.
 */
module.exports = function (objectrepository, viewName) {

    return function (req, res) {
        //res.end('Render: ' + viewName);
        console.log('render');
        switch(viewName) {
        	case 'book':
        		res.tpl.headerContent = '<h1>' + res.tpl.book.title + '</h1>';
        		break;
        	case 'home':
        		res.tpl.headerContent = '<h1>Közös könyvtár</h1><p style="padding:40px;"></p>' +
                '<p>Ahol a <b>kölcsönző</b> és a <b>könyvtáros</b> is te vagy.</p>';
        		break;
        	case 'registration':
        		res.tpl.headerContent = '<h1>Regisztráció</h1>';
        		break;
        	case 'edit_book':
        		res.tpl.headerContent = '<h1>Könyv szerkesztése</h1>';
        		break;
            default:
                res.tpl.headerContent = 'error';
                break;
        }
        res.render(viewName, res.tpl);
    };
};
