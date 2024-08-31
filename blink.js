const fullText = "Boas vindas ao Conecta";
const shortText = "Conecta";
let text = fullText;
let index = 0;
let isDeleting = false;
let speed = 100; // Velocidade da digitação
const pause = 100; // Pausa antes de apagar/recomeçar

function typeWriter() {
    const display = document.getElementById("typewriter");

    // Ajusta o texto conforme o tamanho da tela
    if (window.innerWidth < 768) {
        text = shortText;
        speed = 300
    } else {
        text = fullText;
    }

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
window.onresize = typeWriter; // Adiciona o ajuste ao redimensionar a janela

