socket.on('disconnect', function(error){
    showAlert(Alert.warning, 'Disconnected from server, rejoining...')
    console.log('Disconnected from WebSocket: '+error.toString());
});
socket.on('connect_error', function(error){
    showAlert(Alert.warning, 'Unable to connect to the server. ' + error + ' - retrying...')
    console.log('Disconnected from WebSocket: '+error.toString());
});
socket.on('error', function(error){
    showAlert(Alert.error, 'Unexpected error, you may need to reload the page. See JavaScript console for more information.');
    console.log('Error: '+error.toString());
});