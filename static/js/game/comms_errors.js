socket.on('disconnect', function(){
    alert(Alert.warning, 'Disconnected from server, rejoining...')
    console.log('Disconnect');
});
socket.on('connect_error', function(error){
    alert(Alert.warning, 'Unable to connect to the server. Error: ' + error + ' - retrying...')
    console.log('Disconnect');
});