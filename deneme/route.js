var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send('Homepage');
});

router.get('/login',function(req,res){
    res.sendFile('login.html');
});

router.get('/register',function(req,res){
    res.send('Register Page');    
});

module.exports = router;
