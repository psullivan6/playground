var express       = require('express');
var app           = express();
var router        = express.Router();
var bodyParser    = require('body-parser');
require('colors');

// Environment variables
var PORT = '3030'; // For more complex apps, this would be an environment var hosted on heroku or similar;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('release'));

app.listen(PORT);
console.log('Server started and app live on', 'PORT'.brightYellow, PORT.brightYellow);