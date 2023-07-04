'use strict';

const express = require('express');
const router = express.Router();
const riscoController = require('../controllers/risco.controller');

// Gerencia as rotas de risco

// Criar um novo risco
router.post('/', riscoController.createRisco);

// Obter todos riscos
router.get('/', riscoController.getAllRiscos);

// Consultar um risco pelo id
router.get('/:idRisco', riscoController.getRiscoById);

// Excluir um risco
router.delete('/:idRisco', riscoController.deleteRisco);

module.exports = router;