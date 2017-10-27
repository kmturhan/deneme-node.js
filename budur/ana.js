var fs = require('fs');
var express = require('express');
var path = require('path');
var app = express();




app.use('/public',express.static(path.join(__dirname,'public')));


var routeGiris = require('./routes/girisRoutes');
var routeAnasayfa = require('./routes/anasayfaRoutes');
app.use('/giris',routeGiris);
app.use('/',routeAnasayfa)
app.listen(3000);

