// Exercício radar de trânsito
// a cada 5 km acima do limite de velocidade ganhará 1 ponto
// Math.Floor(); [função do js que arredonda valores para o decimal mais próximo]
// coso pontos for maior que 12 => ' carteira suspendida '


verificaVelocidade(90);



function verificaVelocidade(velocidade) {
    const limite = 70;
    if (velocidade <= limite)
        console.log('OK');
    else {
        const pontosCarteira = Math.floor((velocidade - limite) / 5);
            if (pontosCarteira >= 12)
                console.log('Carteira Suspensa');
            else
                console.log('Pontos: ', pontosCarteira);
    }
    
}
