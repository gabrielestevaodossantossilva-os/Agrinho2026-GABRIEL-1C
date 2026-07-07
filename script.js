// Contador de árvores
let contador = 0;

const botao = document.getElementById("contadorBtn");
const numero = document.getElementById("contador");

botao.addEventListener("click", function () {
    contador++;
    numero.textContent = contador;
});

// Modo escuro
const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

// Quiz
function respostaCorreta() {
    document.getElementById("resultado").textContent =
        "✅ Parabéns! Plantar árvores ajuda a preservar o meio ambiente.";
}

function respostaErrada() {
    document.getElementById("resultado").textContent =
        "❌ Resposta incorreta. O desmatamento prejudica a natureza.";
}

// Formulário
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value;

    document.getElementById("mensagem").textContent =
        "Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.";

    formulario.reset();
});