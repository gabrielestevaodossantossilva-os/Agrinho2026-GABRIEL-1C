// 1. Contador de Árvores Plantadas
let arvores = 0;
const contadorBtn = document.getElementById('contadorBtn');
const contadorTexto = document.getElementById('contador');

contadorBtn.addEventListener('click', () => {
  arvores++;
  contadorTexto.textContent = arvores;
  
  // Efeito rápido de clique
  contadorBtn.style.transform = 'scale(0.95)';
  setTimeout(() => contadorBtn.style.transform = 'scale(1)', 100);
});

// 2. Sistema do Quiz
function respostaCorreta() {
  const resultado = document.getElementById('resultado');
  resultado.textContent = "🎉 Correto! Plantar árvores reconstrói ecossistemas.";
  resultado.style.color = "#27ae60";
  resultado.style.fontWeight = "bold";
}

function respostaErrada() {
  const resultado = document.getElementById('resultado');
  resultado.textContent = "❌ Incorreto. O desmatamento prejudica a biodiversidade e o clima.";
  resultado.style.color = "#e74c3c";
  resultado.style.fontWeight = "bold";
}

// 3. Formulário de Contato
const formulario = document.getElementById('formulario');
const mensagemStatus = document.getElementById('mensagem');

formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que a página recarregue
  const nome = document.getElementById('nome').value;
  
  mensagemStatus.textContent = `Obrigado pelo contato, ${nome}! Mensagem enviada com sucesso. 🌱`;
  mensagemStatus.style.color = "#27ae60";
  mensagemStatus.style.fontWeight = "bold";
  
  formulario.reset(); // Limpa os campos
});

// 4. Modo Escuro (Dark Mode)
const darkModeBtn = document.getElementById('darkMode');
let temaEscuro = false;

darkModeBtn.addEventListener('click', () => {
  temaEscuro = !temaEscuro;
  
  if (temaEscuro) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkModeBtn.textContent = "☀️ Modo Claro";
  } else {
    document.documentElement.removeAttribute('data-theme');
    darkModeBtn.textContent = "🌙 Modo Escuro";
  }
});
