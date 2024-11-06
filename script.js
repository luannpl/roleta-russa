let jogar = document.getElementById('jogar');
let voltar = document.getElementById('voltar');
let imagem = document.getElementById('imagem');
let mensagem = document.getElementById('mensagem');

let chances = 6;
jogar.addEventListener('click', roletaRussa);
voltar.addEventListener('click', voltarJogo);

function roletaRussa() {
    let sorteio = parseInt(Math.random() * chances);
    if (chances === 6) {
        imagem.src = 'images/sobreviveu.avif';
    };
    if (chances === 5) {
        imagem.src = 'images/sobreviveu2.png';
    }
    if(chances === 4) {
        imagem.src = 'images/sobreviveu3.webp';
    }
    if(chances === 3) {
        imagem.src = 'images/sobreviveu4.jpg';
    }
    if (sorteio === 0) {
        mensagem.innerHTML = '<h1>Você morreu!</h1>';
        imagem.src = 'images/morte.jpg';
        jogar.style.display = 'none'; 
    } else {
        mensagem.innerHTML = '<h1>Você sobreviveu!</h1>';
        chances--;
        jogar.innerHTML = 'Jogar novamente';
        if (chances === 1) {
            mensagem.innerHTML = '<h1>Você sobreviveu a todas as chances!</h1>';
            imagem.src = 'images/brabo.jpg';
            jogar.style.display = 'none'; 
        }
    }
    voltar.style.display = 'block';
}


function voltarJogo() {
    window.location.reload();
}