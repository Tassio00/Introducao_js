

// IF and ELSE

let horario = 22;

if (horario <= 12){
    console.log("Good morning!");
}
else if (horario>12 && horario < 18){
    console.log('Good afternoon!');
}

else{
    console.log('Good evening!');
}



// Outro tipo de comparações SWITCH

let permissao; //usuário comum
permissao = '';

switch (permissao) {
    case 'comum':
        console.log('Usuário Comum');
        break;
    case 'gerente':
        console.log('Usuário Gerente');
        break;
    case 'diretor':
        console.log('Usuário Diretor');
        break;
    default:
        console.log('Usuário não encontrado');
}