var express = require('express');
var mysql = require('mysql');

var app = express();

app.use('/', express.static('../client/app'));
app.use('/bower_components', express.static('../client/bower_components/'));

var server = require('http').createServer(app);

var bodyParser = require('body-parser');
app.jsonParser = bodyParser.json();
app.urlencodedParser = bodyParser.urlencoded({ extended: true });

//mysql connection setup
var connection = mysql.createConnection({
    host : "localhost",
    port: "3306",
    user : "root",
    password : "Vicky@123",
    database : "db",
    multipleStatements: true
});

app.get("/cities", function(req, res) {

    console.log(res.body); //I'm getting nothing

    var data= {
       id: req.body.id,
        task: req.body.task
    };

    var query = connection.query('INSERT INTO todos SET ?', data, function(err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log('success');
        }
    });
    console.log(res);
});

server.listen(3000, function () {
    'use strict';
});