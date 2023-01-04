// Factory Functions (Funçõens de Fábricas)
// Criar uma função que cria objetos


function criarCelular(marca, modelo, gb) {
    return{
        marcaCel: marca,
        modelo, // Quando o objeto recebe o mesmo nome que o parametro é possível simplificar assim. 
        gb,
        ligar(){
            console.log('Ligando..')
        }
    }
}

const cel1 = criarCelular('Apple', 'iPhone XR', 128);
console.log(cel1);
