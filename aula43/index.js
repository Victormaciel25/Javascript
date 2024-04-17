// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÂO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com números de 0 a 100
const min = 0;
const max = 100;
let x = random(min, max);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function check(x) {
    if (x % 5 === 0 && x % 3 === 0){
        console.log("FizzBuzz");
    } else if (x % 5 === 0){
        console.log("Buzz");
    } else if (x % 3 === 0){
        console.log("Fizz");
    }  else {
        console.log(x);
    };

    if (!isNaN(x)){
        console.log(x, "é um número");
    } else {
        console.log(x, "não é um número");
    }
}

check(x);

