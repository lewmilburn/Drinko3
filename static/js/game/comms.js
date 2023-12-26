const socket = io('http://localhost:3000', {
    reconnectionDelay: 1000,
    reconnection: true,
    reconnectionAttemps: 10,
    transports: ['websocket'],
    agent: false,
    upgrade: false,
    rejectUnauthorized: false
});

function joinRoom(gameCode) {
    socket.emit('join',gameCode);
    socket.emit('join_name',localStorage.getItem('name'));
}