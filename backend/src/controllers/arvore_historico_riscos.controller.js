'use strict';

const db = require('../config/database');

// Adiciona um risco histórico de uma árvore em uma data específica
exports.addRiscoHistoricoArvore = async (req, res) => {
    const { id_arvore, id_risco, data } = req.body;
    try {
        // Insere os dados na tabela
        const response = await db.query(
            `INSERT INTO arvore_historico_riscos (arvore, risco, data)
            VALUES ($1, $2, TO_DATE($3, 'DD/MM/YYYY'))`,
            [id_arvore, id_risco, data]
        );

        // Se não inserir nenhum dado, retorna erro
        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Risco adicionado ao histórico da árvore com sucesso'
        });
    } catch (error) { // Captura o erro
        res.status(500).send({
            message: 'Ocorreu um erro ao adicionar o risco ao histórico da árvore'
        });
    };
};

// Remove um risco histórico de uma árvore em uma data específica
exports.removeRiscoHistoricoArvore = async (req, res) => {
    const { id_arvore, id_risco, data } = req.body;
    try {
        const response = await db.query(
            `DELETE FROM arvore_historico_riscos
            WHERE arvore = $1 AND risco = $2 AND data = TO_DATE($3, 'DD/MM/YYYY')`,
            [id_arvore, id_risco, data]
        )

        if (response.rowCount == 0) {
            throw new Error();
        }

        res.status(200).send({
            message: 'Risco removido do histórico da árvore com sucesso'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Ocorreu um erro ao remover o risco ao histórico da árvore'
        });
    };
};
// Obtem o histórico de uma árvore pelo ID
exports.getRiscoHistoricoArvoreByID = async (req, res) => {
    // Obtem o ID da árvore
    const id_arvore = parseInt(req.params.id_arvore);
    try {
        // Obtem o histórico da árvore
        const response = await db.query(
            `SELECT r.descricao, TO_CHAR(data, 'DD/MM/YYYY') AS data FROM arvore_historico_riscos ahr
            JOIN risco r ON ahr.risco = r.id
            WHERE arvore = $1`,
            [id_arvore]
        )

        // Se não encontrar nenhum histórico, retorna erro
        if (response.rowCount == 0) {
            res.status(404).send({
                message: 'Histórico não encontrado'
            });
            return;
        }

        // Retorna o histórico da árvore
        res.status(200).send(response.rows);
    } catch (error) {
        // Retorna erro
        res.status(500).send({
            message: 'Ocorreu um erro ao obter o histórico da árvore'
        });
    }
}

// Obtem o histórico de uma ou mais árvores
exports.getRiscoHistoricoArvore = async (req, res) => {
    const { id_arvore, data } = req.body;

    try {
        // Se o id_arvore e data forem passados, retorna o histórico de uma árvore em uma data específica
        if (data !== undefined && id_arvore !== undefined) {
            const response = await db.query(
                `SELECT r.descricao FROM arvore_historico_riscos ahr
                JOIN risco r ON ahr.risco = r.id
                WHERE arvore = $1 AND data = TO_DATE($2, 'DD/MM/YYYY')`,
                [id_arvore, data]
            )

            if (response.rowCount == 0) {
                res.status(404).send({
                    message: 'Histórico não encontrado'
                });
                return;
            }

            res.status(200).send(response.rows);
            return;
        }

        // Se a data não for passada, retorna o histórico de uma árvore
        if (data === undefined) {
            const response = await db.query(
                `SELECT r.descricao, TO_CHAR(data, 'DD/MM/YYYY') AS data FROM arvore_historico_riscos ahr
                JOIN risco r ON ahr.risco = r.id
                WHERE arvore = $1`,
                [id_arvore]
            )

            if (response.rowCount == 0) {
                res.status(404).send({
                    message: 'Histórico não encontrado'
                });
                return;
            }

            res.status(200).send(response.rows);
            return;
        }

        // Se o id_arvore não for passado, retorna o histórico de todas as árvores em uma data específica
        if (id_arvore === undefined) {
            const response = await db.query(
                `SELECT arvore, r.descricao FROM arvore_historico_riscos ahr
                JOIN risco r ON ahr.risco = r.id
                WHERE data = TO_DATE($1, 'DD/MM/YYYY')`,
                [data]
            )

            if (response.rowCount == 0) {
                res.status(404).send({
                    message: 'Histórico não encontrado'
                });
                return;
            }

            res.status(200).send(response.rows);
            return;
        }

        throw new Error();
    } catch (error) {
        res.status(500).send({
            message: 'Ocorreu um erro ao realizar a busca'
        });
    };
};