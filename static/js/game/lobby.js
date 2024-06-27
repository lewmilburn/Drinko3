if (localStorage.getItem('isHost') !== 'true') {
    document.getElementById('hostControls').innerHTML = '<p>Please wait for the host to start the game...</p>'
} else {
    document.getElementById('hostControls').innerHTML = '<button onclick="startGame()" class="btn-lg btn-blue txt-md cursor-pointer">Start the Game</button>'
}