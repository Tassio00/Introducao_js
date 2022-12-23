
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


//| v OPERADORES v |\\

//       Operadores Aritiméticos
//           +  -  *  /  ** 
let salario = 1000;
console.log(salario + salario);
console.log(salario * 3);
console.log(salario - salario);
console.log(salario / 2);
console.log(salario ** 2);
// ++  --
let idade = 19;
console.log(++idade); // os operadores ++ deve ser colocado antes
console.log(--idade);

//    Operadores de Atribuição
let valor= (500);
valor += valor;  // (valor = valor + valor)
console.log(valor);



