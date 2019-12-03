const msyql = require('mysql');

const mysqlConnection = msyql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'squareball_demo',
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
});

mysqlConnection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('DB is connected!.');
    }
});

module.exports = mysqlConnection;