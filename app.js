var express  = require('express'); 
var connect = require('connect'); 
var app      = express(); 
var port     = process.env.PORT || 8080;  
// Configuration 
app.use(express.static(__dirname + '/public')); 
app.use(connect.logger('dev')); 
app.use(connect.json()); 
app.use(connect.urlencoded());  
// Routes  

require('./routes/routes.js')(app);  

//app.set('views', __dirname + '/views');
//  app.engine('html', require('ejs').renderFile);
//  app.get('/', function(req, res) {
//    res.render('index.html');
//  });

app.listen(port);  

console.log('The App runs on port ' + port);
