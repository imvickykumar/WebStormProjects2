const express=require('express');

const app=express();

var http = require('http'),
    fs = require('fs');
fs.readFile('/dbmsproject/result.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(80);
});