var port = 8080,
WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: port });

console.log('WebSocketServer - Listening on port: ' + port);

wss.on('connection', function connection(ws) {

	ws.on('message', function(message) {

		console.log('message: ' + message);
		ws.send('echo: ' + message);

	});

	var date = new Date();
	var current_hour = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

        console.log(current_hour + ' - New client connected! - Total Online (Now): ' + wss.clients.size);
	ws.send('connected!');

});

