var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

app.use(cors({origin: 'http://localhost:3000'}, {origin:'http://lauritzentest.herokuapp.com'}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));




var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('listening on port ', port);
});