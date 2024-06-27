const socket = io('', {
    reconnectionDelay: 1000,
    reconnection: true,
    reconnectionAttemps: 10,
    transports: ['websocket'],
    agent: false,
    upgrade: false,
    rejectUnauthorized: false
});

function joinRoom(gameCode) {
    socket.emit('join',gameCode,localStorage.getItem('name'));
}

function createRoom() {
    socket.emit('new_game',localStorage.getItem('name'));
}