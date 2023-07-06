'use strict';

const db = require('../config/database');

// Cria uma imagem
exports.createImagem = async (req, res) => {
    try {
        // Extrai os dados do corpo da requisição
        const {nomeImagem, imagem } = req.body;

        // Insere os dados no banco
        const response = await db.query(
            `INSERT INTO imagem (nome, dados) VALUES ($1, $2)
            RETURNING id`,
            [nomeImagem, imagem]
        );

        // Caso não tenha inserido, retorna erro
        if (response.rowCount == 0) {
            throw new Error();
        }

        // Inserção bem sucedida
        res.status(201).send({
            message: 'Imagem inserida com sucesso'
        });
    } catch (error) {
        // Erro ao inserir
        res.status(500).send({
            message: 'Ocorreu um erro ao inserir a imagem'
        });

    }
};

// Delete uma imagem
exports.deleteImagem = async (req, res) => {
    try {
        // Extrai o id da requisição
        const { id } = req.params;

        // Deleta a imagem
        const response = await db.query(
            `DELETE FROM imagem WHERE id = $1`,
            [id]
        );

        // Caso não tenha deletado, retorna erro
        if (response.rowCount == 0) {
            res.status(404).send({
                message: 'Imagem não encontrada'
            });
            return;
        }

        // Deleção bem sucedida
        res.status(200).send({
            message: 'Imagem deletada com sucesso'
        });

    } catch (error) {
        // Erro ao deletar
        res.status(500).send({
            message: 'Ocorreu um erro ao deletar a imagem'
        });
    }
};

// Busca uma imagem
exports.getImagem = async (req, res) => {
    try {
        // Extrai o id da requisição
        const { id } = req.params;

        // Busca a imagem no banco
        const { rows } = await db.query(
            `SELECT * FROM imagem WHERE id = $1`,
            [id]
        );
        const imagem = rows[0];

        // Retorna a imagem
        res.status(200).send({
            imagem
        });

    } catch (error) {
        // Erro ao buscar
        res.status(500).send({
            message: 'Ocorreu um erro ao buscar a imagem'
        });
    }
};

// Busca todas as imagens
exports.getImagens = async (_, res) => {
    try {
        // Busca todas as imagens no banco
        const response = await db.query(
            `SELECT id, nome FROM imagem`
        );

        // Caso não tenha encontrado, retorna erro
        if (response.rowCount == 0) {
            res.status(404).send({
                message: 'Nenhuma imagem encontrada'
            });
            return;
        }

        // Retorna as imagens
        res.status(200).send(response.rows);

    } catch (error) {
        // Erro ao buscar
        res.status(500).send({
            message: 'Ocorreu um erro ao buscar as imagens'
        });
    }
}