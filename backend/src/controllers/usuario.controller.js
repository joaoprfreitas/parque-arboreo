'use strict';

const db = require('../config/database');
const bcrypt = require('bcrypt');

// Insere um usuário novo no banco de dados
exports.createUsuario = async (req, res) => {
    const { email, senha, nome, cpf, nusp} = req.body;

    const defaultPermissao = 0;

    bcrypt.hash(senha, 10, (err, hash) => {
        if (err) {
            res.status(400).send({
                message: 'Erro ao encriptar a senha'
            });
            return;
        }
        db.query(
            ` INSERT INTO usuario
            (email, senha, nome, cpf, nusp, permissao)
            VALUES ($1, $2, $3, $4, $5, $6)
            `,
            [email, hash, nome, cpf, nusp, defaultPermissao],
            (err, _) => {
                if (err) {
                    res.status(404).send({
                        message: 'Erro ao inserir usuário no banco de dados'
                    })
                    return;
                }
                res.status(201).send({
                    message: 'Usuário inserido com sucesso'
                });
            }
        )
    });
};

exports.updateUsuarioInfos = async (req, res) => {
    const emailAntigo = req.params.email;
    const { email, nome, cpf, nusp } = req.body;

    db.query(
        ` UPDATE usuario
        SET email = $1, nome = $2, cpf = $3, nusp = $4
        WHERE email = $5
        `,
        [email, nome, cpf, nusp, emailAntigo],
        (err, response) => {
            if (err) {
                res.status(400).send({
                    message: 'Erro ao atualizar informações do usuário'
                })
                return;
            }
            if (response.rowCount == 0) {
                res.status(404).send({
                    message: 'Usuário não encontrado'
                })
                return;
            }

            res.status(200).send({
                message: 'Informações do usuário atualizadas com sucesso'
            });
        }
    );
};

exports.updateSenhaUsuario = async (req, res) => {
    const email = req.params.email;
    const { senha } = req.body;

    bcrypt.hash(senha, 10, (err, hash) => {
        if (err) {
            res.status(400).send({
                message: 'Erro ao encriptar a senha'
            });
            return;
        }
        db.query(
            `UPDATE usuario
            SET senha = $1
            WHERE email = $2`,
            [hash, email],
            (err, _) => {
                if (err) {
                    res.status(400).send({
                        message: 'Erro ao atualizar senha do usuário'
                    });
                    return;
                }

                res.status(200).send({
                    message: 'Senha do usuário atualizada com sucesso'
                });
            }
        );  
    });
};

exports.updateCargoUsuario = async (req, res) => {
    const email = req.params.email;
    const { permissao } = req.body;

    db.query(
        `UPDATE usuario
        SET permissao = $1
        WHERE email = $2`,
        [permissao, email],
        (err, _) => {
            if (err) {
                res.status(400).send({
                    message: 'Erro ao atualizar cargo do usuário'
                });
                return;
            }
            res.status(200).send({
                message: 'Cargo do usuário atualizado com sucesso'
            });
        }
    );
};

exports.deleteUsuario = async (req, res) => {
    const email = req.params.email;

    db.query(
        'DELETE FROM usuario WHERE email = $1',
        [email],
        (err, results) => {
            if (err) {
                res.status(404).send({
                    message: 'Usuário não encontrado'
                })
                return;
            }

            if (results.rowCount == 0) {
                res.status(404).send({
                    message: 'Usuário não encontrado'
                })
                return;
            }

            res.status(200).send({
                message: 'Usuário removido com sucesso'
            });
        }
    )
};

exports.getUsuarioByEmail = async (req, res) => {
    const email = req.params.email;

    db.query(
        'SELECT nome, email, cpf, nusp, permissao FROM usuario WHERE email = $1',
        [email],
        (err, results) => {
            if (err) {
                res.status(404).send({
                    message: 'Usuário não encontrado'
                })
                return;
            }
            if (results.rows.length == 0) {
                res.status(404).send({
                    message: 'Usuário não encontrado'
                })
                return;
            }
            
            res.status(200).send(results.rows[0]);
        }
    )
};

exports.getAllUsuarios = async (_, res) => {
    const response = await db.query('SELECT nome, email FROM usuario ORDER BY nome ASC');

    res.status(200).send(response.rows);
};