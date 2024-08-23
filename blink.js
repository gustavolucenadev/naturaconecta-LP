const text = "Boas vindas ao Conecta";
let index = 0;
let isDeleting = false;
const speed = 100; // Velocidade da digitação
const pause = 100; // Pausa antes de apagar/recomeçar

function typeWriter() {
    const display = document.getElementById("typewriter");

    if (!isDeleting && index <= text.length) {
        display.innerHTML = text.slice(0, index);
        index++;
    } else if (isDeleting && index > 0) {
        display.innerHTML = text.slice(0, index);
        index--;
    }

    if (index === text.length) {
        setTimeout(() => { isDeleting = true; }, pause);
    } else if (index === 0 && isDeleting) {
        isDeleting = false;
    }

    setTimeout(typeWriter, speed);
}

window.onload = typeWriter;
