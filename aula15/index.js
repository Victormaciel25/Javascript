let num1 = 1500;
let num2 = 2.5;

// console.log(num1.toString() + num2);
// num1 = num1.toString();
console.log(num1.toString(2)); // O '2' após o toString é usado para transformar o numero em binário.
console.log(num1.toFixed(2)); // O '2' após o toFixed é usado para botar 2 casas decimais antes do ponto.
console.log(Number.isInteger(num1)); // Verifica se o numero é inteiro(True), se não(false).
let temp = num1 * '5';
console.log(Number.isNaN(temp)); // 