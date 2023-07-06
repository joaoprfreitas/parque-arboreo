'use strict';

const db = require('../config/database');

exports.createImagem = async (req, res) => {
    try {
        const {nomeImagem, imagem } = req.body;

        const response = await db.query(
            `INSERT INTO imagem (nome, dados) VALUES ($1, $2)
            RETURNING id`,
            [nomeImagem, imagem]
        );

        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(201).send({
            message: 'Imagem inserida com sucesso'
        });
    } catch (error) {
        console.error('createImagem', error);
        res.status(500).send({
            message: 'Ocorreu um erro ao inserir a imagem'
        });

    }
};

exports.deleteImagem = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await db.query(
            `DELETE FROM imagem WHERE id = $1`,
            [id]
        );

        if (response.rowCount == 0) {
            res.status(404).send({
                message: 'Imagem não encontrada'
            });
            return;
        }

        res.status(200).send({
            message: 'Imagem deletada com sucesso'
        });

    } catch (error) {
        res.status(500).send({
            message: 'Ocorreu um erro ao deletar a imagem'
        });
    }
};

exports.getImagem = async (req, res) => {
    try {
        const { id } = req.params;

        const { rows } = await db.query(
            `SELECT * FROM imagem WHERE id = $1`,
            [id]
        );

        const imagem = rows[0];

        res.status(200).send({
            imagem
        });

    } catch (error) {
        res.status(500).send({
            message: 'Ocorreu um erro ao buscar a imagem'
        });
    }
};

exports.getImagens = async (_, res) => {
    try {
        const response = await db.query(
            `SELECT id, nome FROM imagem`
        );

        if (response.rowCount == 0) {
            res.status(404).send({
                message: 'Nenhuma imagem encontrada'
            });
            return;
        }

        res.status(200).send(response.rows);

    } catch (error) {
        res.status(500).send({
            message: 'Ocorreu um erro ao buscar as imagens'
        });
    }
}