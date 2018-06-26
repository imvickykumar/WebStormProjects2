const express=require('express');
const app=express();


app.post('/page', function (req, res) {
    calling.aFunction();
    res.send('A message!');
});