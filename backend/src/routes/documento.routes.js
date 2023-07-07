'use strict';

const express = require('express');
const router = express.Router();
const documentoController = require('../controllers/documento.controller');

// Gerencia as rotas de documentos

// listar todos os documentos
router.get('/', documentoController.getAllDocumentos);

// listar um documento pelo id
router.get('/:id', documentoController.getDocumentoById);

// Criar um novo documento
router.post('/', documentoController.createDocumento);

// Atualizar um documento pelo id
router.put('/:id', documentoController.updateDocumento);

// Deletar um documento pelo id
router.delete('/:id', documentoController.deleteDocumento);

module.exports = router;