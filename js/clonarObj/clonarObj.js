// Exemplo de duas maneiras de clonar um bjeto no js:

//obj:

const bicicleta = {
    marca: 'Caloi',
    aro: 20,
    cor: 'Preta',
    pedalar: function(){
        console.log('Pedalando..');
    }
}
//                          V- alvo (pra onde vai o obj que vc vai copiar).
// 1° clone: Object.assign({ } )
const novabike1 = Object.assign({} ,bicicleta);
console.log(novabike1);

// também é possivel adicinar propriedades dentro do alvo
const novabike1Copia = Object.assign({
    valor: 1000
}, novabike1);
console.log(novabike1Copia);


// 2° clone:
const novabike2 = {...bicicleta};
console.log(novabike2);



