const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

router.get('/api/messages', (req, res) => {
    mysqlConnection.query('SELECT * FROM messages ORDER BY createAt DESC', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/api/messages/:name', (req, res) => {
    const { name } = req.params;
    mysqlConnection.query('SELECT * FROM messages WHERE name = ?', [name], (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.post('/api/messages', (req, res) => {
    const { name, createAt, description } = req.body;
    mysqlConnection.query('INSERT INTO messages (name, createAt, description) VALUES (?,?,?)', [name, createAt, description], (err, rows, fields) => {
        if(!err) {
            res.json({status:'200', message: 'Message Saved!.'});
        } else {
            console.log(err);
        }
    });
});

router.put('/api/messages/:id', (req, res) => {
    const { description } = req.body;
    const { id } = req.params;
    mysqlConnection.query('UPDATE messages SET description = ? WHERE id_message = ?', [description, id], (err) => {
        if(!err) {
            res.json({status:'200', message: 'Message Updated!.'});
        } else {
            console.log(err);
        }
    })
});

module.exports = router;