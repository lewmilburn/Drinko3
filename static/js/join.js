function join() {
    let code = document.getElementById('code').value;
    if (code.length === 6 && !isNaN(code)) {
        window.location = '/g/'+code;
    } else {
        alert(Alert.error, 'Invalid game code.');
    }
}