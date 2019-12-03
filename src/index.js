const express = require('express');
const app = express();
const api = require('./routes');

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(express.json());

// Routes
app.get('/', (req, res) => { res.send('REST API - SQUAREBALL DEMO'); });
app.use('/api', api);

// CORS permissions
app.use((req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Starting Server
app.listen(app.get('port'), () => {
    console.log('Server run on', `http://localhost:${app.get('port')}`);
});

module.exports = app;