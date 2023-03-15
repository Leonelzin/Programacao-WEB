//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Douglas Leonel de Almeida
//DATA: 14/03/2023

// definir as variáveis
var cartasViradas = [];
var cartasCorretas = 0;
var tempo = 60;
var cartas = [{
        id: 1,
        img: 'caminho-da-imagem-1'
    },
    {
        id: 2,
        img: 'caminho-da-imagem-2'
    },
];
// embaralhar as cartas
cartas = cartas.concat(cartas);
cartas.sort(function() {
    return 0.5 - Math.random();
});
// criar as cartas no HTML
var tabuleiro = document.getElementById('tabuleiro');
for(var i = 0; i < cartas.length; i++) {
    var carta = document.createElement('div');
    carta.dataset.id = cartas[i].id;
    carta.dataset.img = cartas[i].img;
    carta.addEventListener('click', virarCarta);
    tabuleiro.appendChild(carta);
}
// iniciar o contador de tempo
var contadorTempo = setInterval(function() {
    tempo--;
    document.getElementById('tempo').innerHTML = tempo;
    if(tempo === 0) {
        clearInterval(contadorTempo);
        gameOver();
    }
}, 1000);
// função para virar a carta
function virarCarta() {
    if(cartasViradas.length < 2 && !this.classList.contains('virada')) {
        cartasViradas.push(this);
        this.style.backgroundImage = 'url(' + this.dataset.img + ')';
        this.classList.add('virada');
        if(cartasViradas.length === 2) {
            setTimeout(verificarCartas, 1000);
        }
    }
}
// função para verificar se as cartas são iguais
function verificarCartas() {
    var carta1 = cartasViradas[0];
    var carta2 = cartasViradas[1];
    if(carta1.dataset.id === carta2.dataset.id) {
        carta1.style.backgroundColor = '#00ff00';
        carta2.style.backgroundColor = '#00ff00';
        carta1.removeEventListener('click', virarCarta);
        carta2.removeEventListener('click', virarCarta);
        cartasCorretas++;
        if(cartasCorretas === cartas.length / 2) {
            clearInterval(contadorTempo);
            gameOver();
        }
    }
    else {
        carta1.style.backgroundImage = '';
        carta2.style.backgroundImage = '';
        carta1.classList.remove('virada');
        carta2.classList.remove('virada');
    }
    cartasViradas = [];
}
// função para mostrar a tela de resultados
function gameOver() {
    var mensagem = document.createElement('div');
    mensagem.innerHTML = 'Você ' + (cartasCorretas === cartas.length / 2 ? 'ganhou' : 'perdeu') + ' o jogo!';
    var botaoReiniciar = document.createElement('button');
    botaoReiniciar.innerHTML = 'Reiniciar';
    botaoReiniciar.addEventListener('click', reiniciarJogo);
    var telaResultado = document.createElement('div');
    telaResultado.appendChild(mensagem);
    telaResultado.appendChild(botaoReiniciar);
    document.body.appendChild(telaResultado);
}
// função para reiniciar o jogo
