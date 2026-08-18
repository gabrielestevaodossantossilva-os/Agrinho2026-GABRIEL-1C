// 🌳 CONTADOR DE ÁRVORES

let contador = 0;

document.getElementById("contadorBtn").addEventListener("click", function () {
    contador++;

    document.getElementById("contador").textContent = contador;

    if (contador === 1) {
        this.textContent = "🌳 Plantar outra árvore";
    }

    if (contador >= 10) {
        this.textContent = "🌎 Continuar plantando!";
    }
});


// 🌙 MODO ESCURO

document.getElementById("darkMode").addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        this.textContent = "☀️ Modo Claro";
    } else {
        this.textContent = "🌙 Modo Escuro";
    }

});


// 🧠 QUIZ

function respostaCorreta() {

    document.getElementById("resultado").textContent =
        "✅ Correto! Plantar árvores ajuda a preservar o meio ambiente.";

}


function respostaErrada() {

    document.getElementById("resultado").textContent =
        "❌ Errado! O desmatamento prejudica o meio ambiente.";

}


// 📩 FORMULÁRIO

document.getElementById("formulario").addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    document.getElementById("mensagem").textContent =
        "🌱 Obrigado, " + nome + "! Sua mensagem foi enviada.";

    this.reset();

});
