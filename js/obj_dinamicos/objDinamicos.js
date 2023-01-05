// Objetos no javascripc são dinâmicos

const mouse={
    cor: 'black',
    marca: 'Redragon'
} // é possivel adicionar e remover elementos do objeto

mouse.velocidade = 5000;
mouse.trocarDPI = function(){
    console.log('mudadando a DPI..');
}

delete mouse.velocidade;
delete mouse.trocarDPI;

console.log(mouse);