var url = require('url');
var fs = require('fs');
var express = require('express');
var path = require('path');

var app = express();




function renderHTML(path,response){
    fs.readFile(path,null,function(error,data){
        if(error) {
            response.writeHead(404);
            response.write('File not found');
        }
        else{
            response.write(data);
        }
        response.end();
    });
};
module.exports = {
    handleRequest: function(request,response){
        response.writeHead(200,{'Content-Type':'text/html'});
        
        var path = url.parse(request.url).pathname;
        switch(path){
            case '/':
                renderHTML('./bastan -04routing/index.html',response);
                break;
            case '/login':
                renderHTML('./login.html',response);
                break;
            default:
                response.writeHead(404);
                response.write('route not defined');
                response.end();
        }

    }
};