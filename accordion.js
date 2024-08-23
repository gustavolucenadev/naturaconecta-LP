console.log(document.querySelectorAll('.pr'));  // Verifica se os elementos são encontrados
document.querySelectorAll('.pr').forEach(item => {
    item.addEventListener('click', function() {
        const isActive = this.classList.contains('active');

        // Remover active de todos os itens
        document.querySelectorAll('.pr').forEach(pr => {
            pr.classList.remove('active');
        });

        // Fechar todos os conteúdos ativos
        document.querySelectorAll('.accordion-content').forEach(content => {
            content.style.display = 'none';
        });

        // Se não estava ativo, ativar o item e abrir o conteúdo
        if (!isActive) {
            this.classList.add('active');
            const content = this.querySelector('.accordion-content');
            if (content) {
                content.style.display = 'block';
            }
        }
    });
});