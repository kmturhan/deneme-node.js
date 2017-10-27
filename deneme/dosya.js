var fs = require('fs');
var express = require('express');
var path = require('path');
var app = express();

var ctrlBlog = require('./blogServer/routes/blogRoute');

app.use('/public',express.static(path.join(__dirname,'public')));

app.use(function(req,res,next){
    console.log('url ....'+req.url);
    console.log('time ..........'+Date.now());
    next();
});

app.use('/',ctrlBlog);


app.listen(8000);

