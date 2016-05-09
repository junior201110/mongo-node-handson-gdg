/**
 * Created by junior on 09/05/16.
 */
var express = require('express');
var doT = require('doT');
var app = express();

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view options', {layout: false});
    app.set('view engine', 'dot');
    app.use(app.router);
});


app.get('/',function (req ,res) {
    res.status(200).send('INDEX')
});
app.get('/user',function (req,res) {
    
});
app.listen(3000,function () {
    console.log('APP listem on localhost:3000');
});
