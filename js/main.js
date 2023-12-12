// Slider
const controls = document.querySelectorAll('.control')
let currentArtigo = 0;
const artigos = document.querySelectorAll('.artigo')
const maxArtigos = artigos.length

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');

        if (isLeft) {
            currentArtigo -= 1;
        } else {
            currentArtigo += 1;
        }

        if (currentArtigo >= maxArtigos) {
            currentArtigo = 0;
        }
        if (currentArtigo < 0) {
            currentArtigo = maxArtigos - 1;
        }

        artigos.forEach(artigo => artigo.classList.remove('.current-artigo'));
        
        artigos[currentArtigo].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        });

        artigos[currentArtigo].classList.add('current-artigo')

        console.log("Left click", isLeft, currentArtigo);
    })

})


// Acessibilidade: Aumentar e diminuir textos
function ajustarTamanhoTexto(ajuste) {
    const elementosTexto = document.querySelectorAll(" body p, h1, h2, h3, h4, h5, h6, li");

    elementosTexto.forEach((elemento) => {
        const tamanhoAtual = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
        let novoTamanho = parseFloat(tamanhoAtual) + ajuste;
        elemento.style.fontSize = novoTamanho + 'px';
    });
}