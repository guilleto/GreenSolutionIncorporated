const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'matadrago1',
    port: '3306',
    database: 'rpc',
    schema: 'rpc'
  });
}
