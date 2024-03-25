const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser.'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag , texto} = elementos[i]; // Pega os indices dos elementos tag e texto
    let tagCriada = document.createElement(tag); // Cria tag 
    tagCriada.innerText = texto; // Inseri o texto dentro da tag
    div.appendChild(tagCriada); // Adiciona a tag dentro da div
}

container.appendChild(div);