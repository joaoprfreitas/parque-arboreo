'use strict';

const express = require('express');
const router = express.Router();

/*
 * Rota de teste de conexão
 */
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "API Projeto Arborizas",
        version: '1.0.0'
    });
});

module.exports = router;