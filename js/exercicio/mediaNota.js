// Exercicios que retorna a media das notas
// media apartir de um array
// 0 - 59 = F
// 60 - 69 = D
// 70 - 79 = C
// 80 - 89 = B
// 90 - 100 = A

const notas = [80, 90, 100];
console.log(calcularMedias(notas));

function calcularMedias(notaaaa){
    let some = 0;
    for(let valor of notaaaa){
        some = valor + some;
        
    }
    const mediaa = some / (notaaaa.length);

    if (mediaa >= 0 && mediaa <=59) {return 'F'}
    if (mediaa >= 60 && mediaa <=69) {return 'D'}
    if (mediaa >= 70 && mediaa <=79) {return 'C'}
    if (mediaa >= 80 && mediaa <=89) {return 'B'}
    if (mediaa >= 90 && mediaa <=100) {return 'A'}

    
}


