// Escreva uma função que recebe 2 números e retorne o maior deles

function numeros(x, y) {
    if (x > y) { 
        console.log(x); 
    } else {
        console.log(y);
    }
}

// ou

function numeros(x, y) {
    if (x > y) console.log(x); 
    else console.log(y);
}

// ou

function numeros(x, y) {
    return x > y ? x : y;
}

// ou

const numeros2 = (x, y) => {
    return x > y ? x : y;
};

// simplificando o código acima

const numeros3 = (x, y) => x > y ? x : y;

//numeros2(1, 4);
console.log(numeros2(1, 4));