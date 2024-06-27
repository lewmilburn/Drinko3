function start() {
    localStorage.setItem('name', document.getElementById('newname').value);
    localStorage.setItem('isHost', 'true');
    createRoom();
}

function newgame() {
    document.getElementById('main_startnew').classList.add('hidden');
    document.getElementById('main_join').classList.add('hidden');
    document.getElementById('main_spacer').classList.add('hidden');

    document.getElementById('main_startnew').classList.remove('textbox');
    document.getElementById('main_join').classList.remove('textbox');

    document.getElementById('newgame').classList.remove('hidden');
    document.getElementById('newgame').classList.add('textbox');
}