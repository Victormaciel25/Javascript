//            01234.....
const nome = ['Victor', 'Maciel', 'Rodrigues'];

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }
//           ou
// for (let i in nome) {
//     console.log(nome[i]);
// }
//           ou
for (let valor of nome) {
    console.log(valor);
}

console.log('######');

nome.forEach(function(valor,indice,array) {
    console.log(valor,indice,array);
})

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)