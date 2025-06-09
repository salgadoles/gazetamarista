const container = document.getElementById('cardContainer');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: 320, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -320, behavior: 'smooth' });
});




(function () {
    var script = document.createElement("script");
    script.src = "https://unpkg.com/scrollreveal";
    script.async = true;
    script.onload = function () {
        iniciarScrollReveal();
    };
    document.head.appendChild(script);
})();

function iniciarScrollReveal() {
    if (typeof ScrollReveal !== "undefined") {
        const sr = ScrollReveal({
            reset: true,
            distance: '40px',
            duration: 1200,
            delay: 200,
        });


        // Seção RÁDIO/JORNAL (dobra-1)
        sr.reveal('.logo-conexao', { origin: 'top' });
        sr.reveal('.tittle-dobra-1-esquerda', { origin: 'left' });
        sr.reveal('.tittle-dobra-1-direita', { origin: 'right' });
        sr.reveal('.txt-dobra-1-esquerda', { origin: 'left', delay: 200 });
        sr.reveal('.txt-dobra-1-direita', { origin: 'right', delay: 200 });

        // Seção ULTIMAS NOTICIAS (dobra-3)
        sr.reveal('.titulo-dobra-3', { origin: 'top' });
        sr.reveal('.post', { interval: 100 });

        // Seção QUIZ (dobra-4)
        sr.reveal('.tittle-dobra-4', { origin: 'top' });
        sr.reveal('.button-dobra-4, .tittle-dobra-5', { origin: 'bottom', delay: 200 });

        // Seção PODCAST (dobra-6)
        sr.reveal('.dobra-7-texto', { origin: 'left' });
        sr.reveal('.dobra-7-logo', { origin: 'right' });



        // Botão "Voltar pra cima" (dobra-8)
        sr.reveal('.dobra-8-text', { origin: 'left' });
        sr.reveal('.dobra-8-icon', { origin: 'right' });
    }
}