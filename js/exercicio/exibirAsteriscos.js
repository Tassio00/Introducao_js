// Exercicio que mostra o numeros de asterisco 

mostraAsteriscos(10);

function mostraAsteriscos(n) {
    let aster = '';
    for(let i = 0; i < n; i++){
        aster += '*';
        console.log(aster);
        
    }
}