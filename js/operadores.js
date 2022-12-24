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
// Um cliente, se tiver + de 100pts = premium, - de 100pts = comum
let pontos = 100;
let tipo = pontos >= 100 ? 'premium': 'comum'; 
console.log(tipo);//se a operação for true (primeiro elemento). Se for false (segundo elemento)


//      operadores lógicos:

//Operador (e) = &&  [retorna TRUE se os dois operadores forem true]





