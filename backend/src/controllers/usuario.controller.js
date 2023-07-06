'use strict';

const db = require('../config/database');
const bcrypt = require('bcrypt');

// Insere um usuário novo no banco de dados
exports.createUsuario = async (req, res) => {
    // Extrai os dados do usuário do corpo da requisição
    const { email, senha, nome, cpf, nusp} = req.body;

    const defaultPermissao = 0;

    // Encripta a senha do usuário
    bcrypt.hash(senha, 10, (err, hash) => {
        if (err) {
            res.status(400).send({
                message: 'Erro ao encriptar a senha'
            });
            return;
        }
        // Insere o usuário no banco de dados
        db.query(
            ` INSERT INTO usuario
            (email, senha, nome, cpf, nusp, permissao)
            VALUES ($1, $2, $3, $4, $5, $6)
            `,
            [email, hash, nome, cpf, nusp, defaultPermissao],
            
            (err, _) => {
                // Caso ocorra algum erro, retorna o erro
                if (err) {
                    res.status(404).send({
                        message: 'Erro ao inserir usuário no banco de dados'
                    })
                    return;
                }
                // Caso contrário, retorna uma mensagem de sucesso
                res.status(201).send({
                    message: 'Usuário inserido com sucesso'
                });
            }
        )
    });
};

// Busca todos os usuários no banco de dados
exports.updateUsuarioInfos = async (req, res) => {
    // Extrai os dados do usuário do corpo da requisição
    const emailAntigo = req.params.email;
    const { email, nome, cpf, nusp } = req.body;

    // Atualiza as informações do usuário no banco de dados
    db.query(
        ` UPDATE usuario
        SET email = $1, nome = $2, cpf = $3, nusp = $4
        WHERE email = $5
        `,
        [email, nome, cpf, nusp, emailAntigo],
        (err, response) => {
            // Caso ocorra algum erro, retorna o erro
            if (err) {
                res.status(400).send({
                    message: 'Erro ao atualizar informações do usuário'
                })
                return;
            }
            // Caso resultado da query seja 0, erro: usuário não foi encontrado  
            if (response.rowCount == 0) {
                res.status(404).send({
                    message: 'Usuário não encontrado'
                })
                return;
            }

            // Caso contrário, retorna uma mensagem de sucesso
            res.status(200).send({
                message: 'Informações do usuário atualizadas com sucesso'
            });
        }
    );
};

// Atualiza a senha do usuário no banco de dados
exports.updateSenhaUsuario = async (req, res) => {
    // Extrai os dados do usuário do corpo da requisição
    const email = req.params.email;
    const { senha } = req.body;

    // Encripta a senha do usuário
    bcrypt.hash(senha, 10, (err, hash) => {
        // Caso ocorra algum erro na encriptação, retorna o erro
        if (err) {
            res.status(400).send({
                message: 'Erro ao encriptar a senha'
            });
            return;
        }
        // Atualiza a senha do usuário no banco de dados
        db.query(
            `UPDATE usuario
            SET senha = $1
            WHERE email = $2`,
            [hash, email],
            (err, _) => {
                // Caso ocorra algum erro, retorna o erro
                if (err) {
                    res.status(400).send({
                        message: 'Erro ao atualizar senha do usuário'
                    });
                    return;
                }
                // Caso contrário, retorna uma mensagem de sucesso
                res.status(200).send({
                    message: 'Senha do usuário atualizada com sucesso'
                });
            }
        );  
    });
};

// Atualiza o cargo do usuário no banco de dados
exports.updateCargoUsuario = async (req, res) => {
    // Extrai os dados do usuário do corpo da requisição
    const email = req.params.email;
    const { permissao } = req.body;

    // Atualiza o cargo do usuário no banco de dados
    db.query(
        `UPDATE usuario
        SET permissao = $1
        WHERE email = $2`,
        [permissao, email],
        (err, _) => {
            // Caso ocorra algum erro, retorna o erro
            if (err) {
                res.status(400).send({
                    message: 'Erro ao atualizar cargo do usuário'
                });
                return;
            }
            // Caso contrário, retorna uma mensagem de sucesso
            res.status(200).send({
                message: 'Cargo do usuário atualizado com sucesso'
            });
        }
    );
};

// Remove um usuário do banco de dados
exports.deleteUsuario = async (req, res) => {
    // Extrai email do usuário da requisição
    const email = req.params.email;

    // Remove o usuário do banco de dados
    db.query(
        'DELETE FROM usuario WHERE email = $1',
        [email],
        (err, results) => {
            // Caso ocorra algum erro, retorna o erro
            if (err) {
                res.status(404).send({
                    message: 'Usuário não encontrado'
                })
                return;
            }

            // Caso resultado da query seja 0, erro: usuário não foi encontrado
            if (results.rowCount == 0) {
                res.status(404).send({
                    message: 'Usuário não encontrado'
                })
                return;
            }

            // Caso contrário, retorna uma mensagem de sucesso
            res.status(200).send({
                message: 'Usuário removido com sucesso'
            });
        }
    )
};

// Busca um usuário pelo email no banco de dados
exports.getUsuarioByEmail = async (req, res) => {
    // Extrai email do usuário da requisição
    const email = req.params.email;

    // Busca o usuário no banco de dados
    db.query(
        'SELECT nome, email, cpf, nusp, permissao FROM usuario WHERE email = $1',
        [email],
        (err, results) => {
            // Caso ocorra algum erro, retorna o erro
            if (err) {
                res.status(404).send({
                    message: 'Usuário não encontrado'
                })
                return;
            }
            // Caso resultado da query seja 0, erro: usuário não foi encontrado
            if (results.rows.length == 0) {
                res.status(404).send({
                    message: 'Usuário não encontrado'
                })
                return;
            }
            // Caso contrário, retorna o usuário 
            res.status(200).send(results.rows[0]);
        }
    )
};

// Busca todos os usuários no banco de dados
exports.getAllUsuarios = async (_, res) => {
    // Busca todos os usuários no banco de dados
    const response = await db.query('SELECT nome, email FROM usuario ORDER BY nome ASC');

    // Retorna todos os usuários
    res.status(200).send(response.rows);
};