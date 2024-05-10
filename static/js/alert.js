function showAlert(type, message) {
    let alertBox = document.getElementById('alert-box');
    let alertMessage = document.getElementById('alert-message');
    let alertIcon = document.getElementById('alert-icon');

    if (type === Alert.error) {
        alertBox.classList.add('alert-red');
        alertIcon.innerHTML = '<i class="fa-solid fa-triangle-exclamation" aria-description="Error"></i>';
    } else if (type === Alert.warning) {
        alertBox.classList.add('alert-yellow');
        alertIcon.innerHTML = '<i class="fa-solid fa-circle-exclamation" aria-description="Warning"></i>';
    } else if (type === Alert.info) {
        alertBox.classList.add('alert-blue');
        alertIcon.innerHTML = '<i class="fa-solid fa-circle-info" aria-description="Information"></i>';
    }

    alertMessage.innerText = message;
    alertBox.classList.remove('hidden');

    setTimeout(()=> {
        alertBox.classList.add('hidden');
        if (type === Alert.error) {
            alertBox.classList.remove('alert-red');
        } else if (type === Alert.warning) {
            alertBox.classList.remove('alert-yellow');
        } else if (type === Alert.info) {
            alertBox.classList.remove('alert-blue');
        }
        alertMessage.innerText = '';
        alertIcon.innerText = '';
    },5000);
}