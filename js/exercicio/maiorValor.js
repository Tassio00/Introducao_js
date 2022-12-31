// maior valor entre dois números


function maiorValor(j, k) {
    if (j > k) {
        return j;
    }
    else if (j < k) {
        return k;
    }
    else{
        let iguais = "Valores iguais";
        return iguais;
    }
}

let max_number = maiorValor(10, 20);
console.log(max_number);

// Simplificado com Operador Ternário

function min (n1, n2){
    return n1 < n2 ? n1 : n2;
}

let minimoValor = min(301, 45);
console.log(minimoValor);
