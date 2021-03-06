//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones 
fueron implementadas
usando  elementos de programación simples y clásicos.
*/

/*
Desafío de programación #1: Imprimí los números del 1 al 10
 Resultado: 10 9 8 7 6 5 4 3 2 1
*/

for (i = 1; i <= 10; i++) {
  console.log(i)
};

/*
 Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 1 3 5 ... 99
*/

for (i = 1; i <= 100; i++) {
  if(i% 2 === 1) {
    console.log(i)
  };
};
  
/*
Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63
*/

function tablaDeMultiplicarNumSiete() {
  let multiplicando = 7
  for(i = 0; i <= 10; i++){
    console.log(`${multiplicando} x ${i} = ${i * multiplicando}`);
  }
}
  
tablaDeMultiplicarNumSiete();

/*
Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81
*/

function tablasDeMultiplicar(){
  for(i = 1; i <= 9; i++){
    for(j = 0; j <= 10; j++){
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
};

tablasDeMultiplicar();

/*
Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]
 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle
*/

const array = [1,2,3,4,5,6,7,8,9,10];

function calcularSumaNumeros(){
  let sumaNumeros = 0;
  for(i = 0; i < array.length; i++){
    sumaNumeros += array [i];
  }
  return sumaNumeros;
}

console.log(`La suma de los numeros del Array es ${calcularSumaNumeros()}`);

/*
Desafío de programación #6: Calcula 10! (10 factorial)
10 * 9 * 8 * ... * 1
*/

function calcularFactorial(){
  let numero = 10
  let resultado = 1;
  for(let i=1; i < numero; i++){
    resultado = resultado*i;
  }
  console.log(`El factor de ${numero} es: ${resultado}`);
}

calcularFactorial();

/*
Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
*/

function sumarNumerosImpares() {
  let sumaImpares = 0;
  for(let i = 10; i < 30; i++){
    if(i% 2 !== 0){
    sumaImpares += i;
    }
  }
  return sumaImpares;
}

console.log(`La suma de numeros impares > 10 y < 30 es; ${sumarNumerosImpares()}`);

/*
Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
*/

let gradosCelsius = Number(prompt('Ingrese el valor que desea convertir a F°'));

function convertirCelsiusAFarenheit(){
    return gradosCelsius * 1.8 + 32;
}
console.log(`${convertirCelsiusAFarenheit()} F°`);

/*
Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
*/

let gradosFarenheit = Number(prompt('Ingrese el valor que desea convertir a C°'));

function convertirFarenheitACelsius(){
  return (gradosFarenheit - 32) / 1.8;
}
console.log(`${convertirFarenheitACelsius()} C°`);

/*
Desafío de programación #10: Calcula la suma de todos los números en un array de números
*/

console.log(`La suma de los numeros del Array es ${calcularSumaNumeros()}`);

/*
Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)
*/

const numeros = [6, 8, 5, 9, 14, 25, 2, 1];

function calcularPromedio(){
  let sumaNumeros = 0;
  for (i = 0; i < numeros.length; i++){
    sumaNumeros = sumaNumeros += numeros [i];
  }
  return sumaNumeros / numeros.length;
}

console.log(`El promedio es ${calcularPromedio()}`);

/*
Desafío de programación #12: Crea una función que reciba un array de números y
devuelva un array conteniendo solo los números positivos.
*/

const conjuntoDeNumeros = [-3, -1, -5, 4, 1, 8];

function diferenciarNumerosPositivos(){
  let numerosPositivos = [];
  for (let i = 0; i < conjuntoDeNumeros.length; i++){
    if(conjuntoDeNumeros[i] > 0){
      numerosPositivos.push(conjuntoDeNumeros[i]);
    }
  }
  return numerosPositivos;
}

console.log('El conjunto de numeros positivos es ' + diferenciarNumerosPositivos());

/*
Desafío de programación #13: Find the maximum number in an array of numbers
*/

let conjuntoNumerico = [6, 8, 52, 1072, 1055, 1050, 1820, 1048];

function hallarNumeroMaximoDelConjunto(){
  let numeroMaximo = 0;
  for(let i = 0; i < conjuntoNumerico.length; i = i + 1){
    if (conjuntoNumerico[i] > numeroMaximo){
    numeroMaximo = conjuntoNumerico[i];
    }
  }
  return numeroMaximo;
}
 
console.log(`El numero máximo del Array es ${hallarNumeroMaximoDelConjunto()}`);

/*
Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
*/


const fibonacci = [0,1];

function imprimirDigitosSerieFibonacci(){
  for(i = 2; i <= 10; i++) {
    fibonacci.push(fibonacci [i-1] + fibonacci [i-2]);
  }
  console.log(fibonacci);
}

imprimirDigitosSerieFibonacci();

/*
Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
*/

let n = Number(prompt("Qué n fibonacci desea encontrar?"));

function findFibonacci(n){
  if (n <= 0){
    return 0;
  } else if (n === 1){
    return 1;
  } else {
    return findFibonacci(n - 1) + findFibonacci(n - 2);
  }
}

console.log(findFibonacci(n));

/*
Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) 
dependiendo si es primo o no.
*/

const numeroUsuario = Number(prompt('ingrese numero'));

function determinarSiEsPrimo(num) {
  for(let i = 2; i < num; i++){    
    if(num % i === 0 ) {
      return false;
    } else if (num % i !== 1) {
      return true;
    };
  };

  return num !== 1;
};

console.log(determinarSiEsPrimo(numeroUsuario));


/*
Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10
*/

const numeroTotal = prompt('Ingrese Numero para descomponer y sumar sus digitos');

function sumarDigitosInternosDelNumero(num){
  let resultado = 0;
  for(let i = 0; i < num.length; i++){
    let resultadoParcial = Number(numeroTotal[i]);
    resultado = resultado + resultadoParcial; 
  }
  
  return resultado;
}

console.log(`La suma de los dígitos es ${sumarDigitosInternosDelNumero(numeroTotal)}`);


//Desafío de programación #18: Imprimir los primeros 100 números primos

function imprimirNumerosPrimos(){
  const acumuladorNumerosPrimos = []; // Array en el que se imprimen los números primos.
  let contadorNumerosPrimos = 100; // contador que decrecerá en 1 cada vez que se ingrese un elemento en el acumulador.
  let num = 2; // variable/contador que representa los números que serán chequeados como n primos o no.

  while(contadorNumerosPrimos > 0){ // 
    let j = 0; // sirve para comprobar la condición necesaria para imprimir los n primos en el array. (vuelve a 0 cada vez que vuelve a iniciar el bucle while)
    for(let i = 2; i < num; i++){ //comprueba los divisores entre 2 y num - 1. (si alguno da num % 1 === 0, el num en cuestión es compuesto, no queremos que se imprima).
      if (num % i === 0){
        j++;  //  si el bucle for se comprueba verdadero, es decir (num % i === 0), j suma 1(let j = 1). ***
      };
    };

    if(j === 0){ // ***  Si esta condición es verdadera, el algoritmo imprime el num analizado en el array de n Primos. 
      acumuladorNumerosPrimos.push(num) // La variable j será === 0 sólo si la condición del -if- dentro del bucle 
      contadorNumerosPrimos--; // -for- resulta falsa (es decir, num % i !== 0), ya que, en ese caso no se efectuaría: j++.
    };                        // Finalmente, si se cumple esta condición: hace un push en acumuladorNumerosPrimos y descuenta uno en contadoNumerosPrimos-- (UNO MENOS A IMPRIMIR!).  
    num++; //Una vez terminada la comprobación, actualiza el contador num para chequear un num nuevo (numerador nuevo).
  };

  return acumuladorNumerosPrimos; // La función retorna el array con los datos almacenados.
};


console.log(imprimirNumerosPrimos());



/*
Desafío de programación #19: Crear una función que retorne un array con los primeros números 
"n-primos" mayores que un número particular definido "alComienzo"

Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]
*/


function printNextPrimeNumbers(){
  const primeNumberArray = [];
  let nextNumbersCountdown = 4;
  let number = 5;

  while(nextNumbersCountdown > 0){
    let j = 0;
    for(let i = 2; i < number; i++){
      if(number % i === 0){
        j++;
      };
    };
    if(j === 0){
      primeNumberArray.push(number);
      nextNumbersCountdown--;
    };
    number++;
  };
  return primeNumberArray;
};

console.log(printNextPrimeNumbers());