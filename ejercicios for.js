// MÓDULO 1: INTRODUCCIÓN AL DESARROLLO DE APLICACIONES MÓVILES //
//                  Ejercicios Sentencias FOR                   //

// 1. Escribe un programa que imprima los números del 1 al 10
console.log("Ejercicio 1")

for (let i=1; i<11; i++)
console.log(i)

// 2. Escribe un programa que sume los números del 1 al 100 y muestre el resultado
console.log("Ejercicio 2")

let suma=0
for(let i=1; i<101; i++){
  suma= suma+i
}
console.log("la suma de todos los valores es "+suma)
	
// 3. Escribe un programa que imprima todos los elementos de un array
console.log("Ejercicio 3")

let array= [1,5,9,7,3,4,8,6,2]
for(let i=0; i<array.length; i++){
console.log(array[i])
}

// 4. Escribe un programa que imprima todos los números pares del 1 al 20
console.log("Ejercicio 4")

for(let i=1; i<21; i++){
  if (i % 2 === 0) {
 console.log(i)
}
}

// 5. Escribe un programa que imprima una cadena de texto al revés
//**repasar += cadena [i] y -1**//
console.log("Ejercicio 5")

let chain= "Probando 1 2 3"
let chianInvertida= ""
for(let i = chain.length-1; i>=0 ; i--){
  chainInvertida += cadena[i];}
console.log(chainInvertida);

// 6. Escribe un programa que encuentre el número máximo de un array
console.log("Ejercicio 6")

let mayor= 0
let arreglo= [1,2,8,7,3]
for(let i=0; i<arreglo.length; i++){
  if(arreglo[i]>mayor){
    mayor= arreglo[i]
  }
}
console.log("El número máimo es "+mayor)

// 7. Escribe un programa que calcule el factorial de un número dado
//repasar
console.log("Ejercicio 7")

let factorial= 1
let valor= 3
for(let i=1; i<=valor ; i++){
    factorial *= i
  }
console.log(factorial)
//por que se usa i?

// 8. Escribe un programa que imprima los primeros 10 números de la serie de Fibonacci
console.log("Ejercicio 8")

let A=0
let B=1
let C
for(let i=1 ; i<11 ; i++){
  console.log(A)
  C=A+B
  A=B
  B=C
}

// 9. Escribe un programa que cuente el número de vocales en una cadena de texto
console.log("Ejercicio 9")

let cadena= "Cadena de texto"
let vocales=0
for(i=0 ; i<cadena.length ; i++){
  if("aeiouAEIOU".includes(cadena[i])){
    vocales++
  }
}
console.log(vocales)

// 10. Escribe un programa que imprima la tabla de multiplicar del 5
console.log("Ejercicio 10")

let x=0
let multiplicacion
for(i=0 ; i<11 ; i++){
 multiplicacion= 5*x


console.log("5 x "+x +" = "+multiplicacion)
x++
  }

