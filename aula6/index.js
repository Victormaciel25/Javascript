let nome; //Declarou a variável
nome = 'Victor'; //Inicializando a variável
console.log(nome);
nome = 'Maciel';
console.log(nome);

// Não podemos criar variáveis com palavras reservadas
// Ex:
// let if;

// Variáveis precisam ter nomes significativos
// Ex:
let nomeCliente1 = 'João';
console.log(nomeCliente1);

// Não pode começar o nome de uma variável com número
// let 1nome;

// Utilizamos camelCase(primeira palavra iniciada com letra minuscula e as proximas juntas com inicio em letra maiuscula)
// Ex:
let nomeCompletoDoCliente = 'Victor Maciel';
console.log(nomeCompletoDoCliente);

// Case-sensitive
// Ex:
let nomeCliente = 'Victor';
let nomecliente = 'Maciel';
console.log(nomeCliente, nomecliente);

// Não podemos redeclarar variáveis com let
let cliente = 'Victor';
cliente = 'Maciel';
console.log(cliente);

// Não utilize VAR, utilize LET.