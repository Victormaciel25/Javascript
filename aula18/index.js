function soma(x ,y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2,2));

function soma(x = 1,y = 1) {
    const resultado = x + y;
    return resultado;
}

console.log(soma());

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));