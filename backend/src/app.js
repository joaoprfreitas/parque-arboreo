'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Importa as rotas
const index = require('./routes/index');
const usuario = require('./routes/usuario.routes');

// Habilita no cors o acesso de qualquer origem
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// Permite que o body seja interpretado como json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Carrega as rotas
app.use('/', index);
app.use('/usuario', usuario);

module.exports = app;


