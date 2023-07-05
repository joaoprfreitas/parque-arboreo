'use strict';

const db = require('../config/database');

exports.createTagArvore = async (req, res) => {
    const { arvore, tag } = req.body;
    try {
        const response = await db.query(
            `INSERT INTO tags (arvore, tag)
            VALUES ($1, $2)`,
            [arvore, tag]
        );

        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Tag inserida com sucesso'
        });
        
    } catch (error) {
        res.status(500).send({
            message: 'Ocorreu um erro ao inserir a tag'
        });
    }
};

exports.getTagsArvore = async (req, res) => {
    const { arvore } = req.params;
    try {
        const response = await db.query(
            `SELECT tag FROM tags WHERE arvore = $1`,
            [arvore]
        );

        if (response.rowCount == 0) {
            res.status(404).send({
                message: 'Nenhuma tag encontrada'
            });
            return;
        }

        res.status(200).send(response.rows);
    } catch (error) {
        res.status(500).send({
            message: 'Ocorreu um erro ao buscar as tags'
        });
    }
};

exports.deleteTagArvore = async (req, res) => {
    const {arvore, tag} = req.body;
    try {
        const response = await db.query(
            `DELETE FROM tags WHERE arvore = $1 AND tag = $2`,
            [arvore, tag]
        );

        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Tag removida com sucesso'
        });

    } catch (error) {
        res.status(500).send({
            message: 'Ocorreu um erro ao remover a tag'
        });
    }
};

exports.getArvoresByTags = async (req, res) => {
    const { tags } = req.body;
    try {
        const response = await db.query(
            `SELECT arvore FROM tags WHERE tag = ANY ($1::text[])
            GROUP BY arvore HAVING COUNT(DISTINCT tag) = $2`,
            [tags, tags.length]
        );

        if (response.rowCount == 0) {
            res.status(404).send({
                message: 'Nenhuma árvore encontrada'
            });
            return;
        }

        res.status(200).send(response.rows);
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: 'Ocorreu um erro ao buscar as árvores'
        });
    }
};