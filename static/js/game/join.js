let currentUrl = window.location.href;
let match = currentUrl.match(/\/g\/(\d+)(\/.*)?/);
let gameCode = match ? match[1] : null;

if (verifyGameCode(gameCode)) {
    joinRoom(gameCode);
} else {
    window.location = '/';
}