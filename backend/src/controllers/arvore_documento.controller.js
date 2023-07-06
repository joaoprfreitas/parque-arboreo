'use strict';

const db = require('../config/database');

// Cria uma associação entre uma árvore e um documento
exports.linkArvoreDocumento = async (req, res) => {
    const {id_arvore, id_documento} = req.body;
    
    try {
        // Realiza o insert no banco de dados
        const response = await db.query(
            `INSERT INTO documento_arvore (arvore, documento)
            VALUES ($1, $2)`,
            [id_arvore, id_documento]
        );

        // Se não inserir nenhum dado, retorna erro
        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Árvore vinculada ao documento com sucesso'
        });
    } catch (error) { // Captura o erro
        res.status(500).send({
            message: 'Ocorreu um erro ao vincular a árvore ao documento'
        });
    }
};

// Remove a associação entre uma árvore e um documento
exports.unlinkArvoreDocumento = async (req, res) => {
    const {id_arvore, id_documento} = req.body;

    try {
        // Realiza o delete no banco de dados
        const response = await db.query(
            `DELETE FROM documento_arvore
            WHERE arvore = $1 AND documento = $2`,
            [id_arvore, id_documento]
        );

        // Se não deletar nenhum dado, retorna erro
        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Árvore desvinculada do documento com sucesso'
        });
    } catch (error) { // Captura o erro
        res.status(500).send({
            message: 'Ocorreu um erro ao desvincular a árvore do documento'
        });
    }
}