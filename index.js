var express = require('express');
var app = express();

app.use('/static', express.static('static'));

var server = app.listen(3000, function () {
	console.log("listening on port 3000");
});