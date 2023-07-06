'use strict'

const db = require('../config/database');

// Cadastra um novo documento no banco
exports.createDocumento = async (req, res) => {
    // Dados que serão inseridos
    const { nome, dados } = req.body;

    // Validação
    try {
        // Insere os dados na tabela
        const response = await db.query(
            'INSERT INTO documento (nome, dados) VALUES ($1, $2) RETURNING id',
            [nome, dados]
        );
        
        // Se não inserir nenhum dado, retorna erro
        if (response.rowCount == 0) {
            throw new Error();
        }

        // Retorna o id do documento criado
        res.status(201).send({
            message: 'Documento criado com sucesso',
            id: response.rows[0].id
        });
    } catch (err) {
        // Um erro ocorreu, retorna erro
        res.status(500).send({
            message: 'Erro ao criar documento'
        });
    }
}

// Deleta um documento do banco pelo id
exports.getDocumentoById = async (req, res) => {
    try {
        // id do documento que será buscado
        const id = parseInt(req.params.id);
    
        // Busca o documento no banco de dados
        const response = await db.query(
            'SELECT * FROM documento WHERE id = $1',
            [id]
        );
        
        // Se não encontrar nenhum documento, retorna erro
        if (response.rows.length == 0) {
            throw new Error();
        }

        // Retorna o documento encontrado
        res.status(200).send(response.rows);
    } catch (err) {
        // Um erro ocorreu, retorna erro
        res.status(404).send({
            message: 'Documento não encontrado'
        });
    }  
}

// Busca todos os documentos no banco
exports.getAllDocumentos = async (_, res) => {
    // Busca todos os documentos no banco de dados
    try {
        // Busca o documento no banco de dados
        const response = await db.query('SELECT id, nome FROM documento ORDER BY id ASC');

        // Se não encontrar nenhum documento, retorna erro
        if (response.rows.length == 0) {
            res.status(404).send({
                message: 'Nenhum documento encontrado'
            })
            return;
        }
    
        // Retorna os documentos encontrados
        res.status(200).send(response.rows);
    } catch (err) {
        // Um erro ocorreu, retorna erro
        res.status(500).send({
            message: 'Erro ao buscar documentos'
        });
    }
}

// Atualiza um documento no banco pelo id
exports.updateDocumento = async (req, res) => {
    // dados dos parâmetros que serão atualizados
    const id = parseInt(req.params.id);
    const { nome, dados } = req.body;

    try {
        // Atualiza os dados na tabela
        const response = await db.query(
            'UPDATE documento SET nome = $1, dados = $2 WHERE id = $3',
            [nome, dados, id]
        );

        // Se não atualizar nenhum dado, retorna erro
        if (response.rowCount == 0) {
            res.status(404).send({
                message: 'Documento não encontrado'
            })
            return;
        }
    
        // Retorna o documento atualizado
        res.status(200).send({
            message: 'Documento atualizado com sucesso',
        });
    } catch (err) {
        // Um erro ocorreu, retorna erro
        res.status(500).send({
            message: 'Erro ao atualizar documento'
        });
    }
}

// Deleta um documento do banco pelo id
exports.deleteDocumento = async (req, res) => {
    // id do documento que será deletado
    const id = parseInt(req.params.id);

    try {
        // Deleta o documento no banco de dados
        const response = await db.query(
            'DELETE FROM documento WHERE id = $1',
            [id]
        );

        // Se não deletar nenhum dado, retorna erro
        if (response.rowCount == 0) {
            res.status(404).send({
                message: 'Documento não encontrado'
            })
            return;
        }
    
        // Retorna o documento deletado
        res.status(200).send({
            message: 'Documento deletado com sucesso',
        });
    } catch (err) {
        // Um erro ocorreu, retorna erro
        res.status(500).send({
            message: 'Erro ao deletar documento'
        });
    }
}
