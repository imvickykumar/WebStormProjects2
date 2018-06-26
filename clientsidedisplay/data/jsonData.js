var express = require('express');
var app = express();

require('json-response');

app.get('/', function(req, res){
    res.ok({foo: 'bar'}, 'hello world');
});