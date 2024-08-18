
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        nav.classList.toggle('open');
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Ajuste o valor conforme necessário
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

