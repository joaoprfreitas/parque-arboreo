'use strict';

const db = require('../config/database');

// Cria um novo report
exports.createReport = async (req, res) => {
    // Extrai os dados do corpo da requisição
    const {descricao, data, usuario} = req.body;

    try {
        // Insere os dados no banco de dados
        const response = await db.query(
            `INSERT INTO report (descricao, data, usuario, situacao)
            VALUES ($1, TO_DATE($2, 'DD/MM/YYYY'), $3, 0)`,
            [descricao, data, usuario],
        );

        // Se nenhum dado foi inserido, lança um erro
        if (response.rowCount == 0) {
            throw new Error();
        }

        // Retorna uma mensagem de sucesso
        res.status(201).send({
            message: 'Report criado com sucesso'
        });
    } catch (error) {
        // Retorna uma mensagem de erro
        res.status(400).send({
            message: 'Erro ao criar report'
        });
    }
}

// Busca um report pelo número
exports.getReportByNumero = async (req, res) => {
    try {
        // Extrai o número do report da requisição
        const numero = req.params.numero;

        // Busca o report no banco de dados
        const response = await db.query(
            `SELECT numero, usuario, TO_CHAR(data, 'DD/MM/YYYY') AS data, situacao, descricao 
            FROM report
            WHERE numero = $1`,
            [numero]
        );

        // Se nenhum report foi encontrado, lança um erro
        if (response.rowCount == 0) {
            throw new Error();
        }

        // Retorna o report encontrado
        res.status(200).send(response.rows[0]);
    } catch (error) {
        // Caso exista algum erro, retorna uma mensagem de erro
        res.status(404).send({
            message: 'Report não encontrado'
        });
    }
}
// Atualiza a situação de um report
exports.updateSituacaoReport = async (req, res) => {
    try {
        // Extrai o número do report e a nova situação da requisição
        const numero = req.params.numero;
        const situacao = req.body.situacao;

        // Atualiza a situação do report no banco de dados
        const response = await db.query(
            `UPDATE report SET situacao = $1 WHERE numero = $2`,
            [situacao, numero]
        );

        // Se nenhum report foi atualizado, lança um erro
        if (response.rowCount == 0) {
            res.status(404).send({
                message: 'Report não encontrado'
            });
            return;
        }

        // Retorna uma mensagem de sucesso
        res.status(200).send({
            message: 'Report atualizado com sucesso'
        });
    } catch (error) {
        // Caso exista algum erro, retorna uma mensagem de erro
        res.status(500).send({
            message: 'Erro ao atualizar report'
        });
    }
};

// Busca todos os reports
exports.getAllReports = async (_, res) => {
    try {
        // Busca todos os reports no banco de dados
        const response = await db.query(
            `SELECT numero, usuario, TO_CHAR(data, 'DD/MM/YYYY') AS data, situacao, descricao
            FROM report`
        );

        // Se nenhum report foi encontrado, lança um erro
        if (response.rowCount == 0) {
            throw new Error();
        }
    
        // Retorna todos os reports encontrados
        res.status(200).send(response.rows);
    } catch (error) {
        // Caso exista algum erro, retorna uma mensagem de erro
        res.status(404).send({
            message: 'Nenhum report encontrado'
        });
    }
}

// Deleta um report
exports.deleteReport = async (req, res) => {
    try {
        // Extrai o número do report da requisição
        const numero = req.params.numero;

        // Deleta o report do banco de dados
        const response = await db.query(
            `DELETE FROM report WHERE numero = $1`,
            [numero]
        );

        // Se nenhum report foi deletado, lança um erro
        if (response.rowCount == 0) {
            throw new Error();
        }

        // Retorna uma mensagem de sucesso
        res.status(200).send({
            message: 'Report removido com sucesso'
        });
        
    } catch (error) {
        // Caso exista algum erro, retorna uma mensagem de erro
        res.status(404).send({
            message: 'Report não encontrado'
        })
    }
}