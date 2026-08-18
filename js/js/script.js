let contador = 0;

const contadorBtn = document.getElementById("contadorBtn");
const contadorTexto = document.getElementById("contador");

contadorBtn.addEventListener("click", function () {
  contador++;
  contadorTexto.textContent = contador;

  if (contador === 1) {
    contadorBtn.textContent = "🌳 Plantar outra árvore";
  }

  if (contador >= 10) {
    contadorBtn.textContent = "🌎 Continuar plantando!";
  }
});


const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkMode.textContent = "☀️ Modo Claro";
  } else {
    darkMode.textContent = "🌙 Modo Escuro";
  }
});


function respostaCorreta() {
  const resultado = document.getElementById("resultado");

  resultado.textContent =
    "✅ Muito bem! Plantar árvores ajuda na preservação ambiental.";
}


function respostaErrada() {
  const resultado = document.getElementById("resultado");

  resultado.textContent =
    "❌ Essa atitude prejudica o meio ambiente. Tente novamente!";
}


const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;

  document.getElementById("mensagem").textContent =
    "🌱 Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.";

  formulario.reset();
});
