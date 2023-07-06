'use strict';

const express = require('express');
const router = express.Router();
const imagemController = require('../controllers/imagem.controller');

// Gerencia as rotas de imagem

// Cria uma nova imagem
router.post('/', imagemController.createImagem);

// Atualiza uma imagem pelo id
router.delete('/:id', imagemController.deleteImagem);

// Lista uma imagem pelo id
router.get('/:id', imagemController.getImagem);

// Lista todas as imagens
router.get('/', imagemController.getImagens);

module.exports = router;