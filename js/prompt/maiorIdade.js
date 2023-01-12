// trabalhando com o prompt e alert

function Sujeito(name, years) {
    this.name = name,
    this.years = years
}

function verificarIdade(x){
    
    if (x.years != 0 && x.years >= 18){
        return alert('Maior idade');
    }else if (x.years != 0 && x.years <18){
        return alert('Menor Idade');
    }else{ return alert ('Não foi possivel entender, tente novamente')}
    

}
// na = prompt ('Qual o seu nome?');
// ye = prompt ('Quantos anos você tem?');


// person = new Sujeito(na, ye);

// console.log(verificarIdade(person));

