

// funções 

let corSite = 'azul';

function trocar(cor, tonalidade) {
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
trocar("rosa", "escuro");

console.log(corSite);

// tipos de funções:
// - faz tarefa sem retornar nada. - faz tarefa e devolve alguma coisa.

// sem retorno:
function dizerNome(){
    console.log('Tassio');
};


dizerNome();

//retornando algo:
function multiplicarPorDois(valor){
    return valor*2;
};
let resultado = multiplicarPorDois(5);
console.log(resultado);




