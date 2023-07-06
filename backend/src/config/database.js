const { Pool } = require('pg');
require('dotenv').config();

// Conexão com o banco de dados, por meio de uma
// variável de ambiente (DATABASE_URL)
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});

// Exporta um módulo com a função query para realizar as requisições ao banco de dados
module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }
};