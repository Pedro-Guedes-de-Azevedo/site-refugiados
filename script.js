// script.js

// Função para mostrar ou ocultar o conteúdo dos sections
function toggleContent() {
    // Encontra o próximo elemento irmão do botão (no caso, o conteúdo do section)
    const content = this.nextElementSibling;

    // Alterna a classe "active" para mostrar ou ocultar o conteúdo
    content.classList.toggle("active");
}

// Seletor de todos os botões de classe "toggle-button"
const toggleButtons = document.querySelectorAll(".toggle-button");

// Adiciona um event listener a cada botão
toggleButtons.forEach(button => {
    button.addEventListener("click", toggleContent);
});

