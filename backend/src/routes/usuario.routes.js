'use strict';

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');

// Gerencia as rotas de usuário

// Criar um novo usuario
router.post('/', usuarioController.createUsuario);

// Atualizar um usuario
router.put('/:email', usuarioController.updateUsuarioInfos);

// Atualizar senha de um usuario
// router.put('/senha/:email', usuarioController.updateSenhaUsuario);

// Atualizar cargo de um usuario
router.put('/admin/:email', usuarioController.updateCargoUsuario);

// Excluir um usuario
router.delete('/:email', usuarioController.deleteUsuario);

// Consultar um usuario pelo email
router.get('/:email', usuarioController.getUsuarioByEmail);

// Obter todos usuários
router.get('/', usuarioController.getAllUsuarios);

// TODO: autenticação de usuário

module.exports = router;