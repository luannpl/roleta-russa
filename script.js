let jogar = document.getElementById('jogar');
let voltar = document.getElementById('voltar');
let imagem = document.getElementById('imagem');
let mensagem = document.getElementById('mensagem');
let porcentagem = document.getElementById('porcentagem');

let chances = 6;
jogar.addEventListener('click', roletaRussa);
voltar.addEventListener('click', voltarJogo);
porcentagem.innerHTML = `Chances: ${(100 / (chances)).toFixed(2)}%`;

function roletaRussa() {
    let sorteio = parseInt(Math.random() * chances);
    if (chances === 6) {
        imagem.src = 'images/sobreviveu.avif';
        porcentagem.innerHTML = `Chances: ${(100 / (chances-1).toFixed(2))}%`;
    };
    if (chances === 5) {
        imagem.src = 'images/sobreviveu2.png';
        porcentagem.innerHTML = `Chances: ${(100 / (chances-1).toFixed(2))}%`;
    }
    if(chances === 4) {
        imagem.src = 'images/sobreviveu3.webp';
        porcentagem.innerHTML = `Chances: ${parseInt((100 / (chances-1)))}%`;
    }
    if(chances === 3) {
        imagem.src = 'images/sobreviveu4.jpg';
        porcentagem.innerHTML = `Chances: ${(100 / (chances-1).toFixed(2))}%`;
    }
    if (chances === 2) {
        imagem.src = 'images/sobreviveu5.jpg';
        porcentagem.innerHTML = `Chances: ${(100 / (chances-1)).toFixed(2)}%`;
        // jogar.style.display = 'none'; 
    }
    if (sorteio === 0 || chances === 1) {
        mensagem.innerHTML = '<h1>Você morreu!</h1>';
        imagem.src = 'images/morte.jpg';
        jogar.style.display = 'none'; 
        porcentagem.style.display = 'none';
    } else {
        mensagem.innerHTML = '<h1>Você sobreviveu!</h1>';
        chances--;
        jogar.innerHTML = 'Jogar novamente';
        
    }
    voltar.style.display = 'block';
}


function voltarJogo() {
    window.location.reload();
}