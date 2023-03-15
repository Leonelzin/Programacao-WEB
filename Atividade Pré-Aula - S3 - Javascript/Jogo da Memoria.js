//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Douglas Leonel de Almeida
//DATA: 14/03/2023

// Crie uma lista com as imagens dos pares de cartas
function startGame() {

    const cardImages = [
        "img1.jpg",
        "img2.jpg",
        "img3.jpg",
        "img4.jpg",
        "img5.jpg",
        "img6.jpg",
        "img7.jpg",
        "img8.jpg"
    ];

    // Defina o número de cartas no jogo
    const numCards = cardImages.length * 2;

    // Crie uma lista com os números das cartas
    const cardNumbers = [];
    for (let i = 0; i < numCards; i++) {
        cardNumbers.push(i % cardImages.length);
    }

    // Embaralhe a lista de números de cartas
    for (let i = cardNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardNumbers[i], cardNumbers[j]] = [cardNumbers[j], cardNumbers[i]];
    }

    // Crie a estrutura HTML das cartas
    const gameContainer = document.querySelector(".game-container");
    for (let i = 0; i < numCards; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.cardIndex = i;
        card.innerHTML =
            `<div class="front"></div>
    <div class="back" style="background-image: url('img/${cardImages[cardNumbers[i]]}');"></div>`;
        gameContainer.appendChild(card);
    }

    // Defina as variáveis do jogo
    let numMatches = 0;
    let numClicks = 0;
    let firstCard = null;
    let secondCard = null;
    let gameTimer = null;
    let remainingTime = 60;

    // Defina a função para virar uma carta
    function flipCard(card) {
        if (card.classList.contains("flipped")) {
            return;
        }
        card.classList.add("flipped");
        if (!firstCard) {
            firstCard = card;
            return;
        }
        secondCard = card;
        numClicks++;
        if (firstCard.dataset.cardIndex === secondCard.dataset.cardIndex) {
            // Encontrou um par de cartas
            firstCard = null;
            secondCard = null;
            numMatches++;
            if (numMatches === cardImages.length) {
                // Ganhou o jogo
                endGame(true);
            }
        } else {
            // Não encontrou um par de cartas
            disableCards();
            setTimeout(() => {
                firstCard.classList.remove("flipped");
                secondCard.classList.remove("flipped");
                enableCards();
                firstCard = null;
                secondCard = null;
                if (confirm("Você deseja jogar novamente?")) {
                    // Perdeu o jogo
                    endGame(false);
                }
            }, 1000);
        }
    }

    // Defina as funções para habilitar/desabilitar todas as cartas
    function disableCards() {
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => card.style.pointerEvents = "none");
    }

    function enableCards() {
        const cards = document.querySelectorAll(".card:not(.flipped)");
        cards.forEach(card => card.style.pointerEvents = "auto");
    }

    // Defina a função para atualizar o tempo restante
    function updateTimer() {
        remainingTime--;
        const timerElement = document.getElementById("timer");
        timerElement.textContent = remainingTime + " segundos";
        if (remainingTime === 0) {
            // Perdeu o jogo
            endGame(false);
        };

    }
}

    // Código para exibir mensagem de vitória/derrota aqui
    function endGame(hasWon) {
        // Adicione um ouvinte de eventos para o botão "Jogar novamente"
        const playAgainButton = document.querySelector(".play-again");
        playAgainButton.addEventListener("click", playAgain);
  
    // Remova o listener de evento do botão "Jogar novamente" no final do jogo
    function playAgain() {
        playAgainButton.removeEventListener("click", playAgain);
            startGame();
    }
}

    // Chame a função startGame() quando a página for carregada
    window.addEventListener("load", startGame);
