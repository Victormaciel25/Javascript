/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"
FALSY
* false
0
'' "" ``
null / undefined
NaN
*/ 

function faleiOi (){
    return 'Oi';
}
const vaiExecutar = 'Joãozinho';

console.log(vaiExecutar && faleiOi());

console.log(0 || false || null || 'Luiz Otáivo' || true);
