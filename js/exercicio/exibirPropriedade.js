// Ler propriedade de um objeto para exibir
//apenas as propriedades que forem string

const filme = {
    nome: 'Vingadores',
    genero: 'Super-heróis',
    ano: 2018,
    personagem: 'Homem-Aranha',
}
exibirPropSring(filme);

function exibirPropSring(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
    
}

