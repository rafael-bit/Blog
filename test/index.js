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

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },

    sobrenome:{
        type: Sequelize.STRING
    },

    email: {
        type: Sequelize.STRING
    },

    senha: {
        type: Sequelize.STRING
    }
});

const Post = sequelize.define('posts', {
    titulo: {
        type: Sequelize.STRING
    },

    conteudo: {
        type: Sequelize.TEXT
    },

    autor: {
        type: Sequelize.STRING
    },
    
    data: {
        type: Sequelize.DATE
    }
});

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(4321, function(){console.log("Rodando...")});