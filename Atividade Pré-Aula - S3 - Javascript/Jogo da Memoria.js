//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Douglas Leonel de Almeida
//DATA: 14/03/2023

// Crie uma lista com as imagens dos pares de cartas
function startGame() {
    setCardSize();

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

    if (numCards % 2 !== 0) {
        throw new Error("O número de cartas deve ser par");
    }

    // Defina o número de cartas no jogo
    const numCards = cardImages.length * 2;

    // Crie uma lista com os números das cartas
    const cardNumbers = [];
    for (let i = numCards - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardNumbers[i], cardNumbers[j]] = [cardNumbers[j], cardNumbers[i]];
    }

    // Embaralhe a lista de números de cartas
    const gameContainer = document.querySelector(".game-container") || document.body;
    for (let i = 0; i < numCards; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.cardIndex = i;
        card.innerHTML =
            `<div class="front"></div>
            <div class="back" style="background-image: url('img/${cardImages[cardNumbers[i]]}')"></div>`;
        card.addEventListener("click", function() {
            flipCard(card);
        });
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
        if (gameTimer) {
            clearTimeout(gameTimer);
        }
        gameTimer = setTimeout(() => {
            updateTimer();
        }, 1000);
    }

    function setCardSize() {
        const cardWidth = window.innerWidth < 768 ? (window.innerWidth - 40) / 4 : 120;
        const cardHeight = window.innerWidth < 768 ? (window.innerHeight - 200) / 4 : 160;
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            card.style.width = cardWidth + "px";
            card.style.height = cardHeight + "px";
        });
    }

}

window.addEventListener("load", function() {
    startGame();
});

window.addEventListener("resize", function() {
    setCardSize();
});
