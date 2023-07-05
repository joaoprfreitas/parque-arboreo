'use strict';

const db = require('../config/database');

exports.linkArvoreRisco = async (req, res) => {
    const {id_arvore, id_risco} = req.body;
    
    try {
        const response = await db.query(
            `INSERT INTO arvore_risco (arvore, risco)
            VALUES ($1, $2)`,
            [id_arvore, id_risco]
        );

        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Árvore vinculada ao risco com sucesso'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Ocorreu um erro ao vincular a árvore ao risco'
        });
    }
};

exports.unlinkArvoreRisco = async (req, res) => {
    const {id_arvore, id_risco} = req.body;

    try {
        const response = await db.query(
            `DELETE FROM arvore_risco
            WHERE arvore = $1 AND risco = $2`,
            [id_arvore, id_risco]
        );

        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Árvore desvinculada do risco com sucesso'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Ocorreu um erro ao desvincular a árvore do risco'
        });
    }
}