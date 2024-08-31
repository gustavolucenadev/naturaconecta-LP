document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.bg');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const indicators = document.querySelector('.indicators');
    const slideCount = document.querySelectorAll('.card-slide').length;
    const slideWidth = document.querySelector('.card-slide').offsetWidth;
    let index = 0;

    // Clone os slides para criar o efeito de loop infinito
    const slidesArray = Array.from(document.querySelectorAll('.card-slide'));
    const firstSlides = slidesArray.slice(0, 5).map(slide => slide.cloneNode(true));
    const lastSlides = slidesArray.slice(-5).map(slide => slide.cloneNode(true));

    slides.append(...firstSlides);
    slides.prepend(...lastSlides);

    // Ajuste o tamanho total dos slides
    const totalSlides = slideCount + 10;
    slides.style.width = `${slideWidth * totalSlides}px`;

    // Criação dos indicadores de slide
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('indicator-dot');
        indicators.appendChild(dot);
    }
    const indicatorDots = document.querySelectorAll('.indicator-dot');
    indicatorDots[0].classList.add('active'); // Marque o primeiro como ativo

    function updateCarousel() {
        const offset = -(index + 5) * slideWidth; // Ajuste para o índice do slide clonado
        slides.style.transform = `translateX(${offset}px)`;
        updateIndicators();
        updateButtons();
    }

    function updateIndicators() {
        indicatorDots.forEach(dot => dot.classList.remove('active'));
        indicatorDots[index % slideCount].classList.add('active');
    }

    function updateButtons() {
        prevButton.disabled = (index === 0);
        nextButton.disabled = (index === slideCount - 1);
    }

    function autoPlay() {
        if (window.innerWidth < 768) { // Verifica a largura da tela
            setInterval(() => {
                if (index === slideCount - 1) {
                    index = 0; // Volta para o primeiro slide
                    slides.style.transition = 'none'; // Remove a transição
                    updateCarousel();
                    setTimeout(() => {
                        slides.style.transition = 'transform 0.5s ease'; // Reaplica a transição
                        updateCarousel();
                    }, 0);
                } else {
                    index++;
                    updateCarousel();
                }
            }, 1000); // Tempo de rotação automática (3 segundos)
        }
    }

    prevButton.addEventListener('click', function () {
        if (index === 0) {
            index = slideCount - 1; // Volta para o último slide
            slides.style.transition = 'none'; // Remove a transição
            updateCarousel();
            setTimeout(() => {
                slides.style.transition = 'transform 0.5s ease'; // Reaplica a transição
                updateCarousel();
            }, 0);
        } else {
            index--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', function () {
        if (index === slideCount - 1) {
            index = 0; // Volta para o primeiro slide
            slides.style.transition = 'none'; // Remove a transição
            updateCarousel();
            setTimeout(() => {
                slides.style.transition = 'transform 0.5s ease'; // Reaplica a transição
                updateCarousel();
            }, 0);
        } else {
            index++;
            updateCarousel();
        }
    });

    updateCarousel(); // Inicializa a posição do carrossel
    autoPlay(); // Inicia a rotação automática se necessário
});
