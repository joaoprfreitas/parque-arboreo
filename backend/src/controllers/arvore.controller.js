// 'use strict';

// const db = require('../config/database');

// // Insere um árvore nova no banco de dados
// exports.createArvore = async (req, res) => {
//     const {
//         latitude, longitude, especie, familia, nome_popular,
//         origem, dap, dc, altura_primeira_ramificacao, altura,
//         nome_imagem, imagem
//     } = req.body;

//     let id_arvore = 0;
    
//     db.query(
//         `INSERT INTO arvore (latitude, longitude, especie, familia, nome_popular,
//             origem, dap, dc, altura_primeira_ramificacao, altura)
//         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
//         `,
//         [latitude, longitude, especie, familia, nome_popular,
//             origem, dap, dc, altura_primeira_ramificacao, altura],
//         (error, results) => {
//             if (error) { // Erro ao adicionar árvore
//                 res.status(400).send({
//                     message: 'Erro ao adicionar árvore!',
//                     body: { error }
//                 });
//             } else { // Arvore adicionada com sucesso
//                 id_arvore = results.rows[0];

//                 res.status(201).send({
//                     message: 'Arvore adicionada com sucesso!',
//                     body: { 
//                         arvore: {
//                             id_arvore, latitude, longitude, especie, familia, nome_popular,
//                             origem, dap, dc, altura_primeira_ramificacao, altura
//                         }
//                     },
//                 });
//             }
//         }
//     );

//     let id_imagem = 0;

//     db.query(
//         `INSERT INTO imagem (nome_imagem, imagem)
//         VALUES ($1, $2);`,
//         [nome_imagem, imagem]
//     );
// }

// exports.getArvoreByCodigo = async (req, res) => {
//     const codigo = parseInt(req.params.codigo);
//     const response = await db.query(
//         'SELECT * FROM arvore WHERE codigo = $1',
//         [codigo]
//     )

//     res.status(200).send(response.rows);
// }