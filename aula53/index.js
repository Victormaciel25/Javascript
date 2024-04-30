function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Victor');
const funcao2 = retornaFuncao('Maciel');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());