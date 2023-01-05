// Objeto Endereço:
// criar um objeto que contem as seguintes propriedades:
// Rua
// Cidade
// CEP
// exibirEndereco(endereco)

function CriarEndereco (rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}
const address1 = new CriarEndereco('jõao', 'Sombrio', 88900000);

function exibirEndereco(address) {
    for(let key in address){
        console.log(key, address[key]);
    }
    
}

exibirEndereco(address1);

