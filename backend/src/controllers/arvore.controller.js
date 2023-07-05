'use strict';

const db = require('../config/database');

// Insere um árvore nova no banco de dados
exports.createArvore = async (req, res) => {
    const {
        latitude, longitude, especie, familia, nome_popular,
        origem, dap, dc, altura_primeira_ramificacao, altura
    } = req.body;

    try {
        const response = await db.query(
            `INSERT INTO arvore (latitude, longitude, especie, familia, nome_popular,
                origem, dap, dc, altura_primeira_ramificacao, altura)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING codigo`,
            [latitude, longitude, especie, familia, nome_popular,
                origem, dap, dc, altura_primeira_ramificacao, altura]
        );

        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(201).send({
            codigo: response.rows[0].codigo,
            message: 'Árvore inserida com sucesso'
        });

    } catch (error) {
        res.status(500).send({
            message: 'Ocorreu um erro ao inserir a árvore'
        });
    }
}

exports.deleteArvore = async (req, res) => {
    const codigo = parseInt(req.params.codigo);

    try {
        const response = await db.query(
            'DELETE FROM arvore WHERE codigo = $1',
            [codigo]
        );

        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Árvore removida com sucesso'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Árvore não encontrada'
        });
    }
}

// ## TODO: FAZER JOIN COM AS OUTRAS TABELAS
exports.getArvoreByCodigo = async (req, res) => {
    const codigo = parseInt(req.params.codigo);

    try {
        const response = await db.query(
            'SELECT * FROM arvore WHERE codigo = $1',
            [codigo]
        )

        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send(response.rows[0]);
    } catch (error) {
        res.status(500).send({
            message: 'Árvore não encontrada'
        });
    }
}

// TODO: ajustar informações e fazer join?
exports.updateArvore = async (req, res) => {
    const codigo = parseInt(req.params.codigo);

    try {

    } catch (error) {

    }
};