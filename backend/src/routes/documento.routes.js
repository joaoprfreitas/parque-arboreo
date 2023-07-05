'use strict';

const express = require('express');
const router = express.Router();
const documentoController = require('../controllers/documento.controller');

router.get('/', documentoController.getAllDocumentos);

router.get('/:id', documentoController.getDocumentoById);

router.post('/', documentoController.createDocumento);

router.put('/:id', documentoController.updateDocumento);

router.delete('/:id', documentoController.deleteDocumento);


module.exports = router;