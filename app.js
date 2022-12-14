var express = require('express');
var todoController = require('./controllers/todoController.js');

var app = express();

// setup template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));
// app.use('/assets', express.static('./public'));

// fire controllers
todoController(app);

// listen to port
app.listen(3000);
console.log('Server is listening to 3000');
