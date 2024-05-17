socket.on('start', function(players){
    document.getElementById('game').classList.remove('hidden');
    document.getElementById('waitingForStart').classList.add('hidden');
    console.log(players);
});

socket.on('goToRoom', function(room){
    //window.location = '/g/'+room;
});