// Construction Function

function Hero(name, skils, power) {
    this.name = name,
    this.skils = skils,
    this.power = power,
    this.golpear = function(){
        console.log('Golpeando..');
    }
}

const hero1 = new Hero('Homem-aranha', 'Escalar', 'teia');
console.log(hero1);