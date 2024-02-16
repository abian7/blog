function sendContact() {
    event.preventDefault();

    const apikey = '3865f67d7da794cf00ec3ec65d125e26';
    const full_name = document.getElementById("full_name").value;
    const contact_user = document.getElementById("contact-user").value;
    const message = document.getElementById("message").value;
    const mas2it_key = document.getElementById("mas2it-key").textContent;

    if (full_name && contact_user && message) {
        const sendFormBtn = document.getElementById("send-form");

        sendFormBtn.textContent = 'Loading...';
        sendFormBtn.disabled = true;

        const http = new XMLHttpRequest();
        const url = 'https://tools.masmasit.com/telegram/send/contact/form';
        const params = `key=${mas2it_key}&apikey=${apikey}&full_name=${full_name}&contact_user=${contact_user}&message=${message}`;

        http.open('POST', url, true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                const statusMessage = document.getElementById("status-message");

                if (http.responseText == 'ok') {
                    statusMessage.innerHTML = "Message has been sent";
                    document.getElementById("full_name").value = '';
                    document.getElementById("contact-user").value = '';
                    document.getElementById("message").value = '';
                } else {
                    statusMessage.innerHTML = "Ada kesalahan pada pengiriman pesan";
                }

                sendFormBtn.textContent = 'Send';
                sendFormBtn.disabled = false;
            }
        };

        http.send(params);
    } else {
        document.getElementById("status-message").innerHTML = "Semua kolom isian wajib diisi";
    }
}
