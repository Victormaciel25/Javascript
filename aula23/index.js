/*
Operadores lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Uma ou outra precisa ser verdadeira para retornar true
! -> NOT -> Nâo ->
*/

const expressaoAnd = true && true && true && true;
const expressaoOr = true || false;

console.log(expressaoAnd);
console.log(expressaoOr);

const usuario ='Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);

console.log(true);
console.log(!true); // Nega a resposta original
console.log(!!true); // Nega duas vezes a resposta original, retornando a resposta original.
