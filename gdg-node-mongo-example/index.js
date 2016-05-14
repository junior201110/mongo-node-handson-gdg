//MODULOS UTILIZADOS
var express = require('express');
var pug = require('pug');
var app = express();
var user = require('./models/User');
var bodyParser = require('body-parser');
var connection = require('./libs/connect');
//abre a conexao com o mongodb
connection.tryConnect(function (err) {
    if(err){
        console.log(JSON.stringify(err))
    }else{
        console.log('connection is ready')
    }
});
//seta o modulo utilizado para carrecar
//o corpo da requisicao
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({}));
//seta o motor de template utlizado, nesse caso o
//pug (jade)
app.set('view engine', 'pug');
//seta o diretorio que contem as views
app.set('views', __dirname + '/views');
//seta rotas staticas utilizadas para criar as views
//como css imagens javascript e etc
app.use('/public', express.static(__dirname + '/public'));
//abre a rota '/' que e a principal
app.get('/', (req ,res)=> {
    res.render('index');
});
//essa rota improme algo no console/terminal do compotador
app.get('/teste',function (req,res) {
    res.status(200).json({user:'foo'});
    console.log('rota teste')
});
//rota que inseri dados no mongodb
app.post('/add',(req, res)=>{
    console.log(req.body);
    user.add(req.body,(error,data)=>{
        if(!error){
            res.status(200).send({error:error, data:data});
        } else{
            res.status(200).send({error:error, data:data});
            console.log(data);
        }
    })
});
//monta o servidor na porta 3000 do computador
app.listen(3000,function () {
    console.log('APP listem on localhost:3000');
});
