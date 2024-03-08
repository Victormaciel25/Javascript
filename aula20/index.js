/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol)
*/

let a = [1, 2, 3];
let b = [...a]; // Desta forma o B copia o valor de A
let c = a; // Desta forma o C aponta para o mesmo valor de A

console.log(c, b);
a.push(4);
console.log(c, b);
