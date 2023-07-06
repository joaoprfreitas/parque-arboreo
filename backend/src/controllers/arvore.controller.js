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


exports.getArvoreByCodigo = async (req, res) => {
    const codigo = parseInt(req.params.codigo);

    try {
        const response = await db.query(
            `SELECT a.codigo, a.latitude, a.longitude, a.especie, a.familia, a.nome_popular,
                a.origem, a.dap, a.dc, a.altura_primeira_ramificacao, a.altura
            FROM arvore a
            WHERE codigo = $1`,
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

exports.getArvores = async (req, res) => {
    try {
        const response = await db.query(
            `SELECT codigo FROM arvore`
        );
        
        if (response.rowCount == 0) {
            res.status(404).send({
                message: 'Nenhuma árvore encontrada'
            });
            return;
        }

        res.status(200).send(response.rows);
    } catch (error) {
        res.status(500).send({
            message: 'Ocorreu um erro ao buscar as árvores'
        });
    }
};

exports.updateArvore = async (req, res) => {
    const codigo = parseInt(req.params.codigo);
    const {latitude, longitude, especie, familia, nome_popular, origem,
            dap, dc, altura_primeira_ramificacao, altura} = req.body;

    try {
        const response = await db.query(
            `UPDATE arvore SET latitude = $1, longitude = $2, especie = $3, familia = $4,
                nome_popular = $5, origem = $6, dap = $7, dc = $8,
                altura_primeira_ramificacao = $9, altura = $10
                WHERE codigo = $11`,
            [latitude, longitude, especie, familia, nome_popular, origem,
                dap, dc, altura_primeira_ramificacao, altura, codigo]
        );

        if (response.rowCount == 0) {
            res.status(404).send({
                message: 'Árvore não encontrada'
            })
            return;
        }

        res.status(200).send({
            message: 'Árvore atualizada com sucesso'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Ocorreu um erro ao atualizar a árvore'
        });
    }
};