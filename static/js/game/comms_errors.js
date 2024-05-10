socket.on('disconnect', function(){
    showAlert(Alert.warning, 'Disconnected from server, rejoining...')
    console.log('Disconnect');
});
socket.on('connect_error', function(error){
    showAlert(Alert.warning, 'Unable to connect to the server. ' + error + ' - retrying...')
    console.log('Disconnect');
});
socket.on('error', function(e){
    console.log(e);
    showAlert(Alert.error, 'Unexpected error, you may need to reload the page. See JavaScript console for more information.');
});