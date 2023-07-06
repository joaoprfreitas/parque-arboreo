'use strict';

const db = require('../config/database');

// Associa uma tag a uma árvore
exports.createTagArvore = async (req, res) => {
    // Extrai os dados do corpo da requisição
    const { arvore, tag } = req.body;

    try {
        // Insere os dados no banco
        const response = await db.query(
            `INSERT INTO tags (arvore, tag)
            VALUES ($1, $2)`,
            [arvore, tag]
        );

        // Caso não tenha sido inserido, retorna erro
        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Tag inserida com sucesso'
        });
        
    } catch (error) { // Captura o erro
        res.status(500).send({
            message: 'Ocorreu um erro ao inserir a tag'
        });
    }
};

// Busca todas as tags de uma árvore
exports.getTagsArvore = async (req, res) => {
    const { arvore } = req.params;
    try {
        // Realiza a requisição no banco
        const response = await db.query(
            `SELECT tag FROM tags WHERE arvore = $1`,
            [arvore]
        );

        // Caso não encontre nenhuma tag
        if (response.rowCount == 0) {
            res.status(404).send({
                message: 'Nenhuma tag encontrada'
            });
            return;
        }

        res.status(200).send(response.rows);
    } catch (error) { // Captura o erro
        res.status(500).send({
            message: 'Ocorreu um erro ao buscar as tags'
        });
    }
};

// Remove uma tag de uma árvore
exports.deleteTagArvore = async (req, res) => {
    const {arvore, tag} = req.body;
    try {
        // Realiza a requisição no banco
        const response = await db.query(
            `DELETE FROM tags WHERE arvore = $1 AND tag = $2`,
            [arvore, tag]
        );
        
        // Caso não tenha sido deletado, retorna erro
        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Tag removida com sucesso'
        });

    } catch (error) { // Captura o erro
        res.status(500).send({
            message: 'Ocorreu um erro ao remover a tag'
        });
    }
};

// Busca todas as árvores que possuem todas as tags
exports.getArvoresByTags = async (req, res) => {
    const { tags } = req.body;
    try {
        // Realiza a requisição no banco
        const response = await db.query(
            `SELECT arvore FROM tags WHERE tag = ANY ($1::text[])
            GROUP BY arvore HAVING COUNT(DISTINCT tag) = $2`,
            [tags, tags.length]
        );

        // Caso não encontre nenhuma árvore
        if (response.rowCount == 0) {
            res.status(404).send({
                message: 'Nenhuma árvore encontrada'
            });
            return;
        }

        res.status(200).send(response.rows);
    } catch (error) { // Captura o erro
        res.status(500).send({
            message: 'Ocorreu um erro ao buscar as árvores'
        });
    }
};