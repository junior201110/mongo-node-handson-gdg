/**
 * Created by junior on 09/05/16.
 */
var express = require('express');
var pug = require('pug');
var app = express();
var connection = require('./libs/connect');

connection.tryConnect(function (err) {
    if(err){
        console.log(JSON.stringify(err))
    }else{
        console.log('connection is ready')
    }
});

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req ,res)=> {
    res.render('index');
});

app.get('/user',function (req,res) {
    
});

app.listen(3000,function () {
    console.log('APP listem on localhost:3000');
});
