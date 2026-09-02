// Altera o tamanho da letra da página.

let tamanho = 16;

function aumentarFonte() {
  tamanho = tamanho + 2;
  document.body.style.fontSize = tamanho + "px";
}

function diminuirFonte() {
  tamanho = tamanho - 2;
  document.body.style.fontSize = tamanho + "px";
}
