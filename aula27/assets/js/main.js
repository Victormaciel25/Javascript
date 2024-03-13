// Capturar evento de submit do formulário

const form = document.querySelector('#form');

// Formula para enviar o formulario e previnir a pagina
form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Evento previnido.');
    setResultado('Olá mundo!');
});

function setResultado (msg) {
    const resultado = document.querySelector('#resultado'); // Criando const e vinculando á div com id #resultado.
    resultado.innerHTML = ''; // Enviando para a div uma string sem nada.
    const p = document.createElement('p'); // Criando um paragrafo na const p.
    p.classList.add('paragrafo-resultado'); // Adicionando uma class ao paragrafo criado.
    p.innerHTML = 'Qualquer coisa'; // Enviando uma string dentro de um paragrafo para a div.
    resultado.appendChild(p); // Incluindo a const p dentro da const resultado que se refere a div #resultado.


}