'use strict';

const db = require('../config/database');

exports.linkArvoreDocumento = async (req, res) => {
    const {id_arvore, id_documento} = req.body;
    
    try {
        const response = await db.query(
            `INSERT INTO documento_arvore (arvore, documento)
            VALUES ($1, $2)`,
            [id_arvore, id_documento]
        );

        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Árvore vinculada ao documento com sucesso'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Ocorreu um erro ao vincular a árvore ao documento'
        });
    }
};

exports.unlinkArvoreDocumento = async (req, res) => {
    const {id_arvore, id_documento} = req.body;

    try {
        const response = await db.query(
            `DELETE FROM documento_arvore
            WHERE arvore = $1 AND documento = $2`,
            [id_arvore, id_documento]
        );

        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Árvore desvinculada do documento com sucesso'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Ocorreu um erro ao desvincular a árvore do documento'
        });
    }
}