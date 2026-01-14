// Variáveis que controlam o estado do jogo
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;

function verificarPalpite() {
    const inputPalpite = document.getElementById("inputPalpite");
    const displayFeedback = document.getElementById("feedback");
    const displayTentativas = document.getElementById("displayTentativas");

    const palpite = parseInt(inputPalpite.value);

    // Validação de entrada do usuário
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        displayFeedback.innerText = "Digite um número entre 1 e 100.";
        return;
    }

    tentativasRestantes--;
    displayTentativas.innerText = tentativasRestantes;

    // Lógica de comparação para decidir o feedback
    if (palpite === numeroSecreto) {
        displayFeedback.innerText = "Parabéns! Você acertou!";
        displayFeedback.style.color = "green";
        desativarJogo();
    } else if (tentativasRestantes === 0) {
        displayFeedback.innerText = "Fim de jogo! O número era " + numeroSecreto;
        displayFeedback.style.color = "red";
        desativarJogo();
    } else {
        displayFeedback.innerText = palpite < numeroSecreto ? "MAIOR!" : "MENOR!";
        displayFeedback.style.color = "orange";
    }

    inputPalpite.value = "";
    inputPalpite.focus();
}

// Função que encerra a partida e mostra o botão de novo jogo
function desativarJogo() {
    document.getElementById("inputPalpite").disabled = true;
    document.getElementById("btnReiniciar").style.display = "block";
}

// Função que reseta todos os valores para uma nova partida
function reiniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = 10;

    document.getElementById("inputPalpite").disabled = false;
    document.getElementById("feedback").innerText = "";
    document.getElementById("displayTentativas").innerText = tentativasRestantes;
    document.getElementById("btnReiniciar").style.display = "none";
}