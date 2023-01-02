// Divisíel por 3 => Fizz
// Divisíel por 5 => Buzz
// Divisíel por 3 e 5 => FizzBuz
// Não divisível por 3 ou 5 => Retorna a entrada
// Não é um número => 'Não é um número'

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return "Não é um nummero";
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if ((entrada % 5 === 0))
        return 'Buzz';
    if ((entrada % 3 === 0))
        return 'Fizz';
    return entrada;
}
const resultadoo = fizzBuzz(15);
console.log(resultadoo);
