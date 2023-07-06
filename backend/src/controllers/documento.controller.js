'use strict'

const db = require('../config/database');

exports.createDocumento = async (req, res) => {
    const { nome, dados } = req.body;

    try {
        const response = await db.query(
            'INSERT INTO documento (nome, dados) VALUES ($1, $2) RETURNING id',
            [nome, dados]
        );
        
        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(201).send({
            message: 'Documento criado com sucesso',
            id: response.rows[0].id
        });
    } catch (err) {
        res.status(500).send({
            message: 'Erro ao criar documento'
        });
    }
}

exports.getDocumentoById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
    
        const response = await db.query(
            'SELECT * FROM documento WHERE id = $1',
            [id]
        );

        if (response.rows.length == 0) {
            throw new Error();
        }

        res.status(200).send(response.rows);
    } catch (err) {
        res.status(404).send({
            message: 'Documento não encontrado'
        });
    }  
}

exports.getAllDocumentos = async (_, res) => {
    try {        
        const response = await db.query('SELECT id, nome FROM documento ORDER BY id ASC');

        if (response.rows.length == 0) {
            res.status(404).send({
                message: 'Nenhum documento encontrado'
            })
            return;
        }
    
        res.status(200).send(response.rows);
    } catch (err) {
        res.status(500).send({
            message: 'Erro ao buscar documentos'
        });
    }
}

exports.updateDocumento = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, dados } = req.body;

    try {
        const response = await db.query(
            'UPDATE documento SET nome = $1, dados = $2 WHERE id = $3',
            [nome, dados, id]
        );

        if (response.rowCount == 0) {
            res.status(404).send({
                message: 'Documento não encontrado'
            })
            return;
        }
    
        res.status(200).send({
            message: 'Documento atualizado com sucesso',
        });
    } catch (err) {
        res.status(500).send({
            message: 'Erro ao atualizar documento'
        });
    }
}

exports.deleteDocumento = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const response = await db.query(
            'DELETE FROM documento WHERE id = $1',
            [id]
        );

        if (response.rowCount == 0) {
            res.status(404).send({
                message: 'Documento não encontrado'
            })
            return;
        }
    
        res.status(200).send({
            message: 'Documento deletado com sucesso',
        });
    } catch (err) {
        res.status(500).send({
            message: 'Erro ao deletar documento'
        });
    }
}
