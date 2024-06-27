socket.on('joined', function(players){
    document.getElementById('players').innerHTML = players.join(', ');
});