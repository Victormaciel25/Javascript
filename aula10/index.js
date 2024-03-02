// String, number, undefined, null, boolean, symbol
const nome = 'Luiz'; // string
const nome1 = "Luiz"; // string
const nome2 = `Luiz`; // string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; // undefined -> não aponta pra local nenhuma na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória
const aprovado = false; // Boolean = true, false (lógico)

console.log(typeof aprovado, aprovado);

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2