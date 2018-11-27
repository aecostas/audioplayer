const io = require('socket.io')();

let connections = [];

handleSocketIOConnection = (client) => {
	// TODO: some kind of authentication is required
	// to identify the user
	connections.push(client);

	client.on('start-play', (data) => {
		// TODO: udpate Redis -> (song, event, user)
	});

	client.on('stop-play', (data) => {
		// TODO: udpate Redis -> (song, event, user)
	});

	client.on('pause-play', (data) => {
		// TODO: udpate Redis -> (song, event, user)
	});

	client.on('event-XX', (data) => {
		// TODO: udpate Redis -> (song, event, user)
	});

	// TODO: get, from Redis, current songs listed for this user

	// TODO: subscribe to the number of current playing for each song
	// and notify the user whenever it changes (this should be optimized)
	// to not send too much information through the network
}

io.on('connection', handleSocketIOConnection);

// subscribe to Redis key for announcements and broadcast to all connected users
// connections.map(connection => io... <broadcast>)

io.listen(3100);
