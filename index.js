const Sequelize = require("sequelize");
const sequelize  = new Sequelize('blog', 'root', '123456', {
    host: "localhost",
    dialect: "mysql"
});

const express = require("express");
const app = express();

sequelize.authenticate().then(function(){
    console.log("Conectado com Sucesso !")
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro);
});

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(4321, function(){console.log("Rodando...")});