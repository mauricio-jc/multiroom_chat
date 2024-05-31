const app = require('./config/server');

const server = app.listen(3000, () => {
 	console.log('Server Up');
});

const io = require('socket.io')(server);

app.set('io', io);

io.on('connection', (socket) => {
  	console.log('Usuário conectou: ' + socket.id);

  	socket.on('sendMessage', (data) => {
  		socket.emit('chatToClient', {
			username: data.username,
			message: data.message
		});

		socket.broadcast.emit('chatToClient', {
			username: data.username,
			message: data.message
		});
  	});

  	socket.on('disconnect', (reason) => {
    	console.log('Usuário desconectou');
  	});
});