

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const db = require('./config/db.config');
  
// force: true will drop the table if it already exists
db.connection.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});

require('./route/user.route')(app);
 
// Create a Server
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})
