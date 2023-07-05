const { Pool } = require('pg');
require('dotenv').config();

// Conexão com o banco de dados
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }
};