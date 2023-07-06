'use strict';

const db = require('../config/database');

// Insere um árvore nova no banco de dados
exports.createArvore = async (req, res) => {
    // Extrai os dados do corpo da requisição
    const {
        latitude, longitude, especie, familia, nome_popular,
        origem, dap, dc, altura_primeira_ramificacao, altura
    } = req.body;

    try {
        // Insere a árvore no banco de dados, retornando o id gerado
        const response = await db.query(
            `INSERT INTO arvore (latitude, longitude, especie, familia, nome_popular,
                origem, dap, dc, altura_primeira_ramificacao, altura)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING codigo`,
            [latitude, longitude, especie, familia, nome_popular,
                origem, dap, dc, altura_primeira_ramificacao, altura]
        );

        // Se nenhum dado for inserido, gera um erro
        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(201).send({
            codigo: response.rows[0].codigo,
            message: 'Árvore inserida com sucesso'
        });

    } catch (error) { // Captura o erro
        res.status(500).send({
            message: 'Ocorreu um erro ao inserir a árvore'
        });
    }
}

// Remove uma árvore do banco de dados pelo id
exports.deleteArvore = async (req, res) => {
    // Extrai o id da árvore do parâmetro da requisição
    const codigo = parseInt(req.params.codigo);

    try {
        // Realiza o delete no banco de dados
        const response = await db.query(
            'DELETE FROM arvore WHERE codigo = $1',
            [codigo]
        );
        
        // Se não deletar nenhum dado, retorna erro
        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Árvore removida com sucesso'
        });
    } catch (error) { // Captura o erro
        res.status(500).send({
            message: 'Árvore não encontrada'
        });
    }
}

// Retorna uma árvore do banco de dados pelo id
exports.getArvoreByCodigo = async (req, res) => {
    // Extrai o id da árvore do parâmetro da requisição
    const codigo = parseInt(req.params.codigo);

    try {
        // Realiza a consulta no banco de dados
        const response = await db.query(
            `SELECT a.codigo, a.latitude, a.longitude, a.especie, a.familia, a.nome_popular,
                a.origem, a.dap, a.dc, a.altura_primeira_ramificacao, a.altura
            FROM arvore a
            WHERE codigo = $1`,
            [codigo]
        )

        // Se não encontrar nenhum dado, não foi encontrado
        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send(response.rows[0]);
    } catch (error) { // Captura o erro
        res.status(500).send({
            message: 'Árvore não encontrada'
        });
    }
}

// Retorna o código todas as árvores do banco de dados
exports.getArvores = async (req, res) => {
    try {
        // Realiza a consulta no banco de dados
        const response = await db.query(
            `SELECT codigo FROM arvore`
        );
        
        // Se não retornar nenhum dado, não foi encontrado
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

// Atualiza uma árvore do banco de dados pelo id
exports.updateArvore = async (req, res) => {
    // Extrai o id da árvore do parâmetro da requisição
    const codigo = parseInt(req.params.codigo);
    // Extrai os dados do corpo da requisição
    const {latitude, longitude, especie, familia, nome_popular, origem,
            dap, dc, altura_primeira_ramificacao, altura} = req.body;

    try {
        // Realiza o update no banco de dados
        const response = await db.query(
            `UPDATE arvore SET latitude = $1, longitude = $2, especie = $3, familia = $4,
                nome_popular = $5, origem = $6, dap = $7, dc = $8,
                altura_primeira_ramificacao = $9, altura = $10
                WHERE codigo = $11`,
            [latitude, longitude, especie, familia, nome_popular, origem,
                dap, dc, altura_primeira_ramificacao, altura, codigo]
        );

        // Se não atualizar nenhum dado, não foi encontrado
        if (response.rowCount == 0) {
            res.status(404).send({
                message: 'Árvore não encontrada'
            })
            return;
        }

        res.status(200).send({
            message: 'Árvore atualizada com sucesso'
        });
    } catch (error) { // Captura o erro
        res.status(500).send({
            message: 'Ocorreu um erro ao atualizar a árvore'
        });
    }
};