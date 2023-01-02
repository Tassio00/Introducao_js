// exercicio função que diz se os valores são par ou impar

const resp = parImpar(15);
console.log(resp);

function parImpar (valor){
    if (typeof valor != 'number')
        return 'não é um valor';
    else{
        for(let i = 0; i <= valor; i++){
            if (i % 2 == 0)
                console.log(i, "Par");
            else{
                console.log(i, "Impar");
            }
        }

    } 
}