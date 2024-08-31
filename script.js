document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    // Toggle para abrir e fechar o menu hambúrguer
    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation(); // Impede que o clique no menuToggle dispare o evento de fechamento
        menuToggle.classList.toggle('open');
        nav.classList.toggle('open');
    });

    // Fecha a sidebar ao clicar fora dela
    document.addEventListener('click', (event) => {
        // Verifica se o clique foi fora da sidebar e do menuToggle
        if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
            nav.classList.remove('open');
            menuToggle.classList.remove('open');
        }
    });
});


