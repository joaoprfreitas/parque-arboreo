'use strict';

const db = require('../config/database');

exports.createRisco = async (req, res) => {
    const { descricao } = req.body;

    try {
        const id = await db.query(
            `INSERT INTO risco (descricao) VALUES ($1) RETURNING id`,
            [descricao]
        );

        res.status(201).send({
            message: 'Risco criado com sucesso',
            id: id.rows[0].id
        });

    } catch (error) {
        res.status(400).send({
            message: 'Erro ao criar risco'
        });
    }
};

exports.getAllRiscos = async (req, res) => {
    try {
        const response = await db.query(
            `SELECT * FROM risco`
        );

        res.status(200).send(response.rows);

    } catch (error) {
        res.status(500).send({
            message: 'Erro ao consultar riscos'
        });
    }
};

exports.getRiscoById = async (req, res) => {
    try {
        const { idRisco } = req.params;

        const response = await db.query(
            `SELECT descricao FROM risco WHERE id = $1`,
            [idRisco]
        );

        res.status(200).send(response.rows[0]);
    } catch (error) {
        res.status(500).send({
            message: 'Erro ao consultar risco'
        });
    }
};

exports.deleteRisco = async (req, res) => {
    try {
        const { idRisco } = req.params;

        db.query(
            `DELETE FROM risco WHERE id = $1`,
            [idRisco]
        );

        res.status(200).send({
            message: 'Risco deletado com sucesso'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Erro ao deletar risco'
        });       
    }
};