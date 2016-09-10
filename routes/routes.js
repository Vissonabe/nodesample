var mail = require('config/sendmail');
module.exports = function(app) {        

app.set('views', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);
  app.get('/', function(req, res) {
    res.render('index.html');
  });
   
app.get('/test', function(req, res) {  
          res.end("test tNode-Android-Project");    
     }); 

 app.post('/mail', function(req, res) {  

var email = req.body.email;             
               var password = req.body.password;
mail.sendmail(email,password,function(found){
console.log(found);
res.json(found);    
     }); 
});
};
