//               01234567
let umaString = 'Um texto';

console.log(umaString.charAt(4)); // Usa para selecionar uma casa da variável

console.log(umaString.concat(' em', ' um', ' lindo dia.')); // Usa para juntar algo com uma variável
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf('o', 3)); // Usa para encontrar o indice da letra selecionada, da direção esquerda para direita.
console.log(umaString.lastIndexOf('m', 3)); // Usa para encontrar o indice da letra selecionada, da direção direita para esquerda.

let umaString2 = 'O rato roeu a roupa do rei de roma.';

console.log(umaString2.replace(/r/g, '#')); // Usa para trocar uma letra por outra selecionada.

console.log(umaString2.length); // Usa para saber o tamanho da string.
console.log(umaString2.slice(2, 6)); // Usa para separar alguma palavra da string.
console.log(umaString2.slice(-5, -1)); // É possivel pegar de trás para frente utilizando o numero negativo.

console.log(umaString2.split(' ', 3)); // Usado para dividir uma string através do caractere selecionado.



