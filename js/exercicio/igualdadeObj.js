// Ex que Mosta a igualdede de Objetos
// 

function Local(cidade, estado, pais){
    this.cidade = cidade,
    this.estado = estado,
    this.pais = pais
}
const local1 = new Local('aaa', 'bbb', 'ccc');
const local2 = new Local('aaa', 'bbb', 'ccc');

function iguais(x, y){
    return x.estado === y.estado && x.cidade === y.cidade && x.pais === y.pais;
}

//função que compara se ocupam o mesmo local na memoria
function comparaLocalNaMemoria(x, y){
    return x === y;
}



console.log(iguais(local1, local2));
console.log(comparaLocalNaMemoria(local1, local2));