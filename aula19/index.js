const pessoax = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoax.fala();
pessoax.incrementaIdade();

console.log(pessoax.nome);
console.log(pessoax.idade);

function criaPessoa (nome, sobrenome, idade) {
    return{                  // ou return{nome, sobrenome, idade};
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
};

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Victor', 'Maciel', 25);
const pessoa3 = criaPessoa('Jhulya', 'Felix', 20);

console.log(pessoa3.nome, pessoa2.sobrenome);