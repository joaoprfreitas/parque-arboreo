'use strict';

const db = require('../config/database');

exports.linkArvoreImagem = async (req, res) => {
    const {id_arvore, id_imagem} = req.body;
    
    try {
        const response = await db.query(
            `INSERT INTO imagem_arvore (arvore, imagem)
            VALUES ($1, $2)`,
            [id_arvore, id_imagem]
        );

        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Árvore vinculada à imagem com sucesso'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Ocorreu um erro ao vincular a árvore à imagem'
        });
    }
};

exports.unlinkArvoreImagem = async (req, res) => {
    const {id_arvore, id_imagem} = req.body;

    try {
        const response = await db.query(
            `DELETE FROM imagem_arvore
            WHERE arvore = $1 AND imagem = $2`,
            [id_arvore, id_imagem]
        );

        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Árvore desvinculada da imagem com sucesso'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Ocorreu um erro ao desvincular a árvore da imagem'
        });
    }
}