/* PASSO A PASSO DA LÓGICA (REVISÃO):
   1. Capturar o palpite do usuário.
   2. Validar se é um número entre 1 e 100.
   3. Comparar com o número secreto.
   4. Atualizar as tentativas e dar o feedback.
*/

// Variáveis globais (já criadas anteriormente)
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;

// Função chamada ao clicar no botão "Chutar"
function verificarPalpite() {
    // 1. Pegar os elementos do HTML pelo ID
    const inputPalpite = document.getElementById("inputPalpite");
    const displayFeedback = document.getElementById("feedback");
    const displayTentativas = document.getElementById("displayTentativas");

    // 2. Converter o valor do input para um número inteiro
    const palpite = parseInt(inputPalpite.value);

    // 3. Validação: verificar se o número é válido
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        displayFeedback.innerText = "Por favor, digite um número entre 1 e 100.";
        return; // Para a execução aqui se for inválido
    }

    // 4. Diminuir o contador de tentativas
    tentativasRestantes--;
    displayTentativas.innerText = tentativasRestantes;

    // 5. Comparação do palpite
    if (palpite === numeroSecreto) {
        displayFeedback.innerText = "Parabéns! Você acertou!";
        displayFeedback.style.color = "green";
        desativarJogo(); // Função para travar o input após ganhar
    } else if (tentativasRestantes === 0) {
        displayFeedback.innerText = "Que pena! O número secreto era " + numeroSecreto;
        displayFeedback.style.color = "red";
        desativarJogo();
    } else if (palpite < numeroSecreto) {
        displayFeedback.innerText = "O número secreto é MAIOR!";
        displayFeedback.style.color = "orange";
    } else {
        displayFeedback.innerText = "O número secreto é MENOR!";
        displayFeedback.style.color = "orange";
    }

    // Limpa o campo de input para o próximo chute
    inputPalpite.value = "";
    inputPalpite.focus();
}

// Função auxiliar para encerrar o jogo
function desativarJogo() {
    document.getElementById("inputPalpite").disabled = true;
    /* PASSO A PASSO PARA REINICIAR:
  1. Criar a função 'reiniciarJogo'
  2. Sortear um novo número secreto
  3. Resetar as tentativas para 10
  4. Limpar as mensagens de feedback
  5. Habilitar o input novamente
*/

function desativarJogo() {
    document.getElementById("inputPalpite").disabled = true;
    // Mostra o botão de reiniciar quando o jogo acaba
    document.getElementById("btnReiniciar").style.display = "block";
}

function reiniciarJogo() {
    // 1. Gera novo número e reseta tentativas
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = 10;

    // 2. Limpa a interface
    document.getElementById("inputPalpite").disabled = false;
    document.getElementById("inputPalpite").value = "";
    document.getElementById("feedback").innerText = "";
    document.getElementById("displayTentativas").innerText = tentativasRestantes;
    
    // 3. Esconde o botão de reiniciar novamente
    document.getElementById("btnReiniciar").style.display = "none";
    
    console.log("Novo número secreto: " + numeroSecreto);
}
}