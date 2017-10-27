var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/components',express.static('css'));

app.set('views','./ilkel/views');
app.set('view engine','pug');

app.get('/pug',function(req,res){
    res.render('index',{title: 'Hoop',message:'Meraba'});
});


app.get('/albums',function(req,res){
   // var images = [
   //     images/img1.jpeg,
   //    images/img2.jpeg,
     //   images/img3.jpeg,
     //   images/img4.jpeg,
   // ];
    res.render('albums',{title:'Albums',message='Albumns',images: images});
});

app.listen(3000,function(){
    console.log('Server Açık..');
});