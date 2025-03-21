const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'K@06rathod',
    database: 'SSPharma'
}).promise();

module.exports = pool;
