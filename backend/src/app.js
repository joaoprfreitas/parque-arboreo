'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Importa as rotas
const index = require('./routes/index');
const usuario = require('./routes/usuario.routes');
const imagem = require('./routes/imagem.routes');
const report = require('./routes/report.routes');
const risco = require('./routes/risco.routes');
const documento = require('./routes/documento.routes');

// Habilita no cors o acesso de qualquer origem
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// Permite que o body seja interpretado como json
app.use(bodyParser.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/upload', express.static('upload'));

// Carrega as rotas
app.use('/', index);
app.use('/usuario', usuario);
app.use('/arvore/imagem', imagem);
app.use('/report', report);
app.use('/risco', risco);
app.use('/documento', documento);

module.exports = app;


