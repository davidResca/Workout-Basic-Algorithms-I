
// TAREAS DE ALGORITMOS - NIVEL PRINCIPIANTE - CURSO r-ARGENTINA PROGRAMA




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

console.log(`La suma de numeros impares > 10 y > 30 es; ${sumarNumerosImpares()}`);

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

// Hecho en #5


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
