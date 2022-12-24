//| v OPERADORES v |\\

//       Operadores Aritiméticos
//           +  -  *  /  ** 
let salario = 1000;
console.log(salario + salario);
console.log(salario * 3);
console.log(salario - salario);
console.log(salario / 2);
console.log(salario ** 2);
// ++  --
let idade = 19;
console.log(++idade); // os operadores ++ deve ser colocado antes
console.log(--idade);


//      Operadores de Atribuição:
let valor= (500);
valor += valor;  // (valor = valor + valor)
console.log(valor);


//      operadores de igualdade:
console.log(1 === 1); // verifica se o tipo é o mesmo  (mais recomendado)
console.log('1' === 1); // false

    //   igualdade solta
console.log(1 == 1 ); //true
console.log(1 == '1'); //true


//      Operador Ternário:
// ex: Um cliente, se tiver + de 100pts = premium, - de 100pts = comum
let pontos = 100;
let tipo = pontos >= 100 ? 'premium': 'comum'; 
console.log(tipo);//se a operação for true (primeiro elemento). Se for false (segundo elemento)


//      operadores lógicos:

//Operador (e) = &&  [retorna TRUE se os dois operandos forem true]

console.log(true && true); //true
console.log(true && false); //false
// ex: Só pode tirar a carteira se for maior de idade
let maioridade = false;
let possuiCarteira = true;
let podeDirigir = maioridade && possuiCarteira;
console.log('Pode dirigir: ', podeDirigir); //false

//Operador (ou) = ||  [retorna TRUE se um dos operanos forem true]

let podeDirigir2 = maioridade || possuiCarteira;
console.log('Pode dirigir2: ', podeDirigir2); //true

//Operador (not) = !  [retorna tudo que não for o operando]

let motoristaRecusado = !podeDirigir2;
console.log('Recusado: ', motoristaRecusado);



// COMPARAÇÔES COM VALORES NÂO BOLEANOS

//Falsy:
//undefined
//null
// 0
// false
// ''
// NaN - not a number (volores inválidos)

//Truthy: [Tudos os tipos que não são os tipos acima ^]








