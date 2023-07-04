'use strict';

const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report.controller');

// Cria um novo report
router.post('/', reportController.createReport);

// Consultar todos reports
router.get('/', reportController.getAllReports);

// Consultar report específico (pelo numero)
router.get('/:numero', reportController.getReportByNumero);

// Deletar report específico (pelo numero)
router.delete('/:numero', reportController.deleteReport);

module.exports = router;