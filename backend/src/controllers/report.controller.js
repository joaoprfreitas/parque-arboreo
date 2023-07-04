'use strict';

const db = require('../config/database');

exports.createReport = async (req, res) => {
    const {descricao, data, usuario, situacao} = req.body;

    db.query(
        `INSERT INTO report (descricao, data, usuario, situacao)
        VALUES ($1, TO_DATE($2, 'DD/MM/YYYY'), $3, $4)`,
        [descricao, data, usuario, situacao],
        (err, _) => {
            if (err) {
                res.status(404).send({
                    message: 'Erro ao criar report'
                })
                return;
            }
        }
    );

    res.status(201).send({ 
        message: 'Report criado com sucesso'
    });
}

exports.getReportByNumero = async (req, res) => {
    try {
        const numero = req.params.numero;

        const response = await db.query(
            `SELECT numero, usuario, TO_CHAR(data, 'DD/MM/YYYY') AS data, situacao, descricao 
            FROM report
            WHERE numero = $1`,
            [numero]
        );

        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send(response);
    } catch (error) {
        res.status(404).send({
            message: 'Report não encontrado'
        });
    }
}

exports.getAllReports = async (_, res) => {
    try {
        const response = await db.query(
            `SELECT numero, usuario, TO_CHAR(data, 'DD/MM/YYYY') AS data, situacao, descricao
            FROM report`
        );

        if (response.rowCount == 0) {
            throw new Error();
        }
    
        res.status(200).send(response.rows);
    } catch (error) {
        res.status(404).send({
            message: 'Nenhum report encontrado'
        });
    }
}

exports.deleteReport = async (req, res) => {
    try {
        const numero = req.params.numero;

        const response = await db.query(
            `DELETE FROM report WHERE numero = $1`,
            [numero]
        );

        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Report removido com sucesso'
        });
        
    } catch (error) {
        res.status(404).send({
            message: 'Report não encontrado'
        })
    }
}