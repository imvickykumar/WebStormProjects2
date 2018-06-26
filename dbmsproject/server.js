const express=require('express');
const mysql=require('mysql');

// const db=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Vicky@123',
//     database:'todos'
// });
//
//
// db.connect(function (err) {
//     if(err){
//         throw err;
//     } else {
//         console.log('mysql connected...');
//     }
// });


const app=express();

// app.get('/createdb',function (req,res) {
//     let sql=''
// })


app.listen('30000',function () {
    console.log('server started on port 3000');
});

