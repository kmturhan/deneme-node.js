var path = require('path');
var express = require('express');
var router = express.Router();
module.exports.index = function(req,res){
    console.log(req.deneme);
    res.sendFile(path.join(__dirname,'../../anasayfa.html'));
};

module.exports.login = function(req,res){
    res.sendFile(path.join(__dirname,'../../login.html'));
};

module.exports.history = function(req,res){
    res.sendFile(path.join(__dirname,'../../history.html'));
};

