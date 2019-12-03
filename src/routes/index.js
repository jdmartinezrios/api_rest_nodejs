const express = require('express');
const api = express.Router();
const messages = require('../controllers/messages');

api.get('/messages', messages.getAll);
api.get('/messages/:name', messages.getByName);
api.post('/messages', messages.createMessage);
api.put('/messages/:id', messages.updateMessage);
api.delete('/messages/:id', messages.deleteMessage);

module.exports = api;