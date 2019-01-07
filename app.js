var express = require ('express'),
app = express(),
port = process.env.PORT || 2000;
mongoose = require ('mongoose'),
//loading the created model
Task = require('./api/models/todoListModel'),
//require bodyParser
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb',{ useNewUrlParser: true });

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

//middleware
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

//get html file
app.get('./public', function(req, res){
    res.sendFile("index.html");
});

app.listen(2000);

console.log('todo list RESTful API server started on: ' + port);
