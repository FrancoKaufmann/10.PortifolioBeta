var msgCookies = document.getElementById('cokkiesCont');

function aceitou() {
    localStorage.lgpd = "sim";
    msgCookies.classList.remove('mostrar')
}

if (localStorage.lgpd == "sim") {
    msgCookies.classList.remove('mostrar')
} else {
    msgCookies.classList.add('mostrar')
}