const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
const buttonSpeak = document.querySelector(".buttonSpeak")

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));
hamburguer.addEventListener("click", () => buttonSpeak.classList.toggle("active"));