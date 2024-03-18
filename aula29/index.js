/*
const hoje = Date.now()
const data2 = new Date(2019, 2, 30, 14, 6, 55); // (ano, mes, dia, hora, minuto, segundo, milésimo de segundo)
const data = new Date(hoje);
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 é Domingo, 6 é Sábado
console.log(data.toString());
console.log(Date.now());
*/
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}:`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);