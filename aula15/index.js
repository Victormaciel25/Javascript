// IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

num1 += num2 // 0.8
num1 += num2 // 0.9 
num1 += num2 // 1.0

num1 = parseFloat(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2);
// num1 = num1.toString();
console.log(num1.toString(2)); // O '2' após o toString é usado para transformar o numero em binário.
console.log(num1.toFixed(2)); // O '2' após o toFixed é usado para botar 2 casas decimais antes do ponto.
console.log(Number.isInteger(num1)); // Verifica se o numero é inteiro(True), se não(false).
let temp = num1 * '5';
console.log(Number.isNaN(temp)); // 