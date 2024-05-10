function join() {
    localStorage.setItem('isHost', 'false');
    let code = document.getElementById('code').value;
    let name = document.getElementById('name').value;
    if (verifyGameCode(code) && name.length !== 0) {
        localStorage.setItem('name', name);
        window.location = '/g/'+code;
    } else {
        alert(Alert.error, 'Invalid game code.');
    }
}