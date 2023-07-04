'use strict';

const express = require('express');
const router = express.Router();
const imagemController = require('../controllers/imagem.controller');

router.post('/', imagemController.createImagem);
router.delete('/', imagemController.deleteImagem);
router.get('/', imagemController.getImagem);

module.exports = router;