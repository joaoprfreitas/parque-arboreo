'use strict';

const express = require('express');
const router = express.Router();
const arvoreController = require('../controllers/arvore.controller');
const arvoreRiscoController = require('../controllers/arvore_risco.controller');
const arvoreImagemController = require('../controllers/arvore_imagem.controller');
const arvoreDocumentoController = require('../controllers/arvore_documento.controller');
const tagController = require('../controllers/tags.controller');
const historicoArvoreController = require('../controllers/arvore_historico_riscos.controller');

// <------Link Árvore risco------>

// Vincular uma árvore a um risco
router.post('/risco', arvoreRiscoController.linkArvoreRisco);

// Desvincular uma árvore de um risco
router.delete('/risco', arvoreRiscoController.unlinkArvoreRisco);

// <------Link Árvore imagem------>

// Vincular uma árvore a uma imagem
router.post('/imagem', arvoreImagemController.linkArvoreImagem);

// Desvincular uma árvore de uma imagem
router.delete('/imagem', arvoreImagemController.unlinkArvoreImagem);

// <------Link Árvore documento------>

// Vincular uma árvore a um documento
router.post('/documento', arvoreDocumentoController.linkArvoreDocumento);

// Desvincular uma árvore de um documento
router.delete('/documento', arvoreDocumentoController.unlinkArvoreDocumento);

// <------Histórico da árvore------>

// Adicionar risco ao histórico de uma árvore
router.post('/historico', historicoArvoreController.addRiscoHistoricoArvore);

// Removover risco do histórico de uma árvore
router.delete('/historico', historicoArvoreController.removeRiscoHistoricoArvore);

// Listar o histórico de uma árvore e/ou de uma data
router.get('/historico', historicoArvoreController.getRiscoHistoricoArvore);

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

// Buscar todas as árvores
router.get('/', arvoreController.getArvores);

// Buscar uma árvore pelo código
router.get('/:codigo', arvoreController.getArvoreByCodigo);

// Remover uma árvore pelo código
router.delete('/:codigo', arvoreController.deleteArvore);

// Atualizar uma árvore pelo código
router.put('/:codigo', arvoreController.updateArvore);




module.exports = router;