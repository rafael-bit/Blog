const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require("sequelize");
const sequelize  = new Sequelize('blog', 'root', '123456', {
    host: "localhost",
    dialect: "mysql"
});

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set("view engine", "handlebars")

app.listen(4321, function(){
    console.log("Servidor Rodando")
})