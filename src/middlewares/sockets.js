const app = require('../index');
const server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('Alguien se ha conectado al socket');
    socket.on('getMessages', (data));
    socket.emit(data);
});

module.exports = io;