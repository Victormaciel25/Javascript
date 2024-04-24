function criaHoraDosSegundos (segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

console.log(criaHoraDosSegundos(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(event){
    relogio.innerHTML = 'Cliquei no iniciar';
});

pausar.addEventListener('click', function(event){
    alert('Cliquei no pausar');
});

zerar.addEventListener('click', function(event){
    alert('Cliquei no zerar');
});