'use strict';

const db = require('../config/database');

// Cria um novo risco
exports.createRisco = async (req, res) => {
    // Extrai o nome do risco do corpo da requisição
    const { descricao } = req.body;

    try {
        // Insere o risco no banco de dados
        const id = await db.query(
            `INSERT INTO risco (descricao) VALUES ($1) RETURNING id`,
            [descricao]
        );

        // Retorna o id do risco criado
        res.status(201).send({
            message: 'Risco criado com sucesso',
            id: id.rows[0].id
        });

    } catch (error) {
        // Retorna erro caso não seja possível criar o risco
        res.status(400).send({
            message: 'Erro ao criar risco'
        });
    }
};

// Lista todos os riscos
exports.getAllRiscos = async (req, res) => {
    try {
        // Consulta todos os riscos
        const response = await db.query(
            `SELECT * FROM risco`
        );
        
        // Se nenhum risco for encontrado, retorna 404
        if (response.rowCount == 0) {
            res.status(404).send({
                message: 'Nenhum risco encontrado'
            });
            return;
        }

        // Retorna os riscos encontrados
        res.status(200).send(response.rows);

    } catch (error) {
        // Retorna erro caso não seja possível consultar os riscos
        res.status(500).send({
            message: 'Erro ao consultar riscos'
        });
    }
};

// Lista um risco pelo id
exports.getRiscoById = async (req, res) => {
    try {
        // Extrai o id do risco dos parâmetros da requisição
        const { idRisco } = req.params;

        // Consulta o risco pelo id
        const response = await db.query(
            `SELECT descricao FROM risco WHERE id = $1`,
            [idRisco]
        );

        // Retorna risco encontrado
        res.status(200).send(response.rows[0]);
    } catch (error) {
        // Retorna erro caso não haja problema ao consultar o risco
        res.status(500).send({
            message: 'Erro ao consultar risco'
        });
    }
};

// Atualiza um risco
exports.deleteRisco = async (req, res) => {
    try {
        // Extrai o id do risco dos parâmetros da requisição
        const { idRisco } = req.params;

        // Deleta o risco pelo id
        db.query(
            `DELETE FROM risco WHERE id = $1`,
            [idRisco]
        );

        // Retorna mensagem de sucesso
        res.status(200).send({
            message: 'Risco deletado com sucesso'
        });
    } catch (error) {
        // Retorna erro caso haja problema ao deletar o risco
        res.status(500).send({
            message: 'Erro ao deletar risco'
        });       
    }
};