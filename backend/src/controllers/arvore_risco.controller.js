'use strict';

const db = require('../config/database');

// Cria uma associação entre uma árvore e um risco
exports.linkArvoreRisco = async (req, res) => {
    const {id_arvore, id_risco} = req.body;
    
    try {
        // Realiza o insert no banco de dados
        const response = await db.query(
            `INSERT INTO arvore_risco (arvore, risco)
            VALUES ($1, $2)`,
            [id_arvore, id_risco]
        );

        // Se não inserir nenhum dado, retorna erro
        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Árvore vinculada ao risco com sucesso'
        });
    } catch (error) { // Captura o erro
        res.status(500).send({
            message: 'Ocorreu um erro ao vincular a árvore ao risco'
        });
    }
};

// Remove uma associação entre uma árvore e um risco
exports.unlinkArvoreRisco = async (req, res) => {
    const {id_arvore, id_risco} = req.body;

    try {
        // Realiza o delete no banco de dados
        const response = await db.query(
            `DELETE FROM arvore_risco
            WHERE arvore = $1 AND risco = $2`,
            [id_arvore, id_risco]
        );

        // Se não deletar nenhum dado, retorna erro
        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Árvore desvinculada do risco com sucesso'
        });
    } catch (error) { // Captura o erro
        res.status(500).send({
            message: 'Ocorreu um erro ao desvincular a árvore do risco'
        });
    }
}