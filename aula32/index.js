const verdadeira = true;

// Let tem escopo de bloco {...bloco}
// Var só tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otávio'; // criando
    var nome2 = 'Rogério'; // redeclarando

    if (verdadeira){
        var nome2 = 'Ronaldo';
        let nome = 'Outra coisa'; // redeclarando
    }
}

console.log(nome,nome2);

function falaOi () {
    var sobrenome = 'Miranda';
}

console.log(sobrenome);

falaOi();