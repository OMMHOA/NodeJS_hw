var express = require('express');
var app = express();
var logRequest = require('./middleware/generic/logRequest');

app.use('/static', express.static('static'));

app.use(logRequest());
require('./routes/book')(app);
require('./routes/registration')(app);
require('./routes/home')(app);

var server = app.listen(3000, function () {
	console.log("listening on port 3000");
});