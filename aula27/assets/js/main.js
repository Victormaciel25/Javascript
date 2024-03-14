// Capturar evento de submit do formulário

const form = document.querySelector('#form');

// Formula para enviar o formulario e previnir a pagina
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    console.log(inputPeso);
});

function criaP (className) {
    const p = document.createElement('p'); // Criando um paragrafo na const p.
    return p;
}

function setResultado (msg) {
    const resultado = document.querySelector('#resultado'); // Criando const e vinculando á div com id #resultado.
    resultado.innerHTML = ''; // Enviando para a div uma string sem nada.
    resultado.appendChild(p); // Incluindo a const p dentro da const resultado que se refere a div #resultado.
    const p = criaP();
    p.
}