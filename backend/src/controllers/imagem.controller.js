'use strict';

const db = require('../config/database');

exports.createImagem = async (req, res) => {
    try {
        const { arvore, nomeImagem, imagem } = req.body;

        const { rows } = await db.query(
            `INSERT INTO imagem (nome, dados) VALUES ($1, $2)
            RETURNING id`,
            [nomeImagem, imagem]
        );

        const idImagem = rows[0].id;

        await db.query(
            `INSERT INTO arvore_imagem (arvore, imagem) VALUES ($1, $2)`,
            [arvore, idImagem]
        );

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
        const { idImagem } = req.body;

        await db.query(
            `DELETE FROM imagem WHERE id = $1`,
            [idImagem]
        );

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
        const { idImagem } = req.body;

        const { rows } = await db.query(
            `SELECT * FROM imagem WHERE id = $1`,
            [idImagem]
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