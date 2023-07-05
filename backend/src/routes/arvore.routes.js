'use strict';

const express = require('express');
const router = express.Router();
const arvoreController = require('../controllers/arvore.controller');
const arvoreRiscoController = require('../controllers/arvore_risco.controller');
const arvoreImagemController = require('../controllers/arvore_imagem.controller');
const tagController = require('../controllers/tags.controller');

// <------Link Árvore risco------>

// Vincular uma árvore a um risco
router.post('/risco', arvoreRiscoController.linkArvoreRisco);

// Desvincular uma árvore de um risco
router.delete('/risco', arvoreRiscoController.unlinkArvoreRisco);

// <------Link Árvore imagem------>

// Vincular uma árvore a um risco
router.post('/imagem', arvoreImagemController.linkArvoreImagem);

// Desvincular uma árvore de um risco
router.delete('/imagem', arvoreImagemController.unlinkArvoreImagem);

// <---------Tag árvore--------->

// Adicionar uma tag a uma árvore
router.post('/tag', tagController.createTagArvore);

// Remover uma tag de uma árvore
router.delete('/tag', tagController.deleteTagArvore);

// Buscar todas as tags de uma árvore
router.get('/tag/:arvore', tagController.getTagsArvore);

// Buscar árvores por tags
router.get('/tag', tagController.getArvoresByTags);

// <-----------Árvore----------->

// Cadastrar uma nova árvore
router.post('/', arvoreController.createArvore);

// Buscar uma árvore pelo código
router.get('/:codigo', arvoreController.getArvoreByCodigo);

// Remover uma árvore pelo código
router.delete('/:codigo', arvoreController.deleteArvore);

// Atualizar uma árvore pelo código
router.put('/:codigo', arvoreController.updateArvore);

// Buscar todas as árvores




module.exports = router;