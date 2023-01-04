// Exercicio que mostra apenas os números primos 
// Numeros primos => Apenas divisível por um numero e ele mesmo

mostrarPrimos(11);

function mostrarPrimos(number) {
    for(let i = 2; i <= number; i++){
        let ehPrimo = true;

        for(let divisor = 2; divisor < i; divisor++){
            if(i % divisor === 0){
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo){
            console.log(i);
        }
        
    }
    
}


    
