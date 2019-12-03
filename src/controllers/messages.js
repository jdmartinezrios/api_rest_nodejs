const mysqlConnection = require('../database');

function getAll(req, res) {
    mysqlConnection.query('SELECT * FROM messages ORDER BY createAt DESC', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
}

function getByName(req, res) {
    const { name } = req.params;
    mysqlConnection.query('SELECT * FROM messages WHERE name = ?', [name], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
}

function createMessage(req, res) {
    const { name, createAt, description } = req.body;
    mysqlConnection.query('INSERT INTO messages (name, createAt, description) VALUES (?,?,?)', [name, createAt, description], async (err, rows, fields) => {
        if (!err) {
            res.json({ status: '200', message: 'Message Saved!.' });
        } else {
            console.log(err);
        }
    });
}

function updateMessage(req, res) {
    const { description } = req.body;
    const { id } = req.params;
    mysqlConnection.query('UPDATE messages SET description = ? WHERE id_message = ?', [description, id], (err) => {
        if (!err) {
            res.json({ status: '200', message: 'Message Updated!.' });
        } else {
            console.log(err);
        }
    });
}

function deleteMessage(req, res) {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM messages WHERE id_message = ?', [id], (err) => {
        if (!err) {
            res.json({ status: '200', message: 'Message Deleted!' });
        } else {
            console.log(err);
        }
    });
}

module.exports = {
    getAll,
    getByName,
    createMessage,
    updateMessage,
    deleteMessage
}

