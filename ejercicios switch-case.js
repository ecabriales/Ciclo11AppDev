// MÓDULO 1: INTRODUCCIÓN AL DESARROLLO DE APLICACIONES MÓVILES //
//              Ejercicios Sentencias SWITCH/CASE               //

// 1. Escribe un programa que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente. (1=Lunes, 2=Martes, etc)
console.log("Ejercicio 1")

let dia = 1
switch (dia) {
  case 1: console.log("Lunes"); break;
  case 2: console.log("Maretes"); break;
  case 3: console.log("Miercoles"); break;
  case 4: console.log("Jueves"); break;
  case 5: console.log("Viernes"); break;
  case 6: console.log("Sabado"); break;
  case 7: console.log("Domingo"); break;
 default: console.log("Día inválido")
}

// 2. Escribe un programa que reciba una letra (A, B, C, D, F) y devuelva la calificación correspondiente. Donde A es la mas alta y F es reprobado, si recibe otra entrada enviar mensaje "Calificación inválida". Ejemplo: Recibe A, debe de imprimir "Excelente"
console.log("Ejercicio 2")

let calificacion = "F"
switch (calificacion) {
  case "A": console.log("Excelente"); break;
  case "B": console.log("Bueno"); break;
  case "C": console.log("Regular"); break;
  case "D": console.log("Deficiente"); break;
  case "F": console.log("Reprobado"); break;
 default: console.log("Calificacion invalida")
}

// 3. Escribe un programa que reciba un número del 1 al 12 y devuelva el mes correspondiente. Si recibe otra entrada enviar mensaje “Número inválido”
console.log("Ejercicio 3")

let mes = 10
switch (mes) {
  case 1: console.log ("Enero"); break;
  case 2: console.log ("Febrero"); break;
  case 3: console.log ("Marzo"); break;
  case 4: console.log ("Abril"); break;
  case 5: console.log ("Mayo"); break;
  case 6: console.log ("Junio"); break;
  case 7: console.log ("Julio"); break;
  case 8: console.log ("Agosto"); break;
  case 9: console.log ("Septiembre"); break;
  case 10: console.log ("Octubre"); break;
  case 11: console.log ("Noviembre"); break;
  case 12: console.log ("Diciembre"); break;
  default: console.log ("Número invalido")
}

// 4. Escribe un programa que reciba un color (rojo, amarillo, verde) y devuelva la acción correspondiente. Si recibe otra entrada enviar mensaje "Color inválido"
console.log("Ejercicio 4")

let color= "verde"
switch (color) {
  case "rojo": console.log ("Alto"); break;
  case "amarillo": console.log ("Precaución"); break;
  case "verde": console.log ("Siga"); break;
  default: console.log ("Color inválido")
}

// 5. Escribe un programa que reciba el número de lados iguales de un triángulo (0, 2, 3) y devuelva el tipo de triángulo. Si recibe otra entrada enviar mensaje "Número inválido"
console.log("Ejercicio ")

let ladosIguales= 1
switch (ladosIguales) {
  case 0: console.log ("Escaleno"); break;
  case 2: console.log ("Isosceles"); break;
  case 3: console.log ("Equilatero"); break;
  default: console.log ("Número inválido")
}

// 6. Escribe un programa que reciba un número del 1 al 4 y devuelva la estación del año correspondiente. Si recibe otra entrada enviar mensaje "Número inválido"
console.log("Ejercicio 6")

let estacion= 1
switch (estacion) {
  case 1: console.log ("Primavera"); break;
  case 2: console.log ("Verano"); break;
  case 3: console.log ("Otoño"); break;
  case 4: console.log ("Invierno"); break;
  default: console.log ("Número inválido")
}

// 7. Escribe un programa que reciba un tipo de vehículo (coche, moto, bicicleta) y devuelva el número de ruedas. Si recibe otra entrada enviar mensaje "Vehículo inválido"
console.log("Ejercicio 7")

let vehiculo= "bicicleta"
switch (vehiculo) {
  case "coche": console.log ("4 ruedas"); break;
  case "moto": console.log ("2 ruedas"); break;
  case "bicicleta": console.log ("2 ruedas"); break;
  default: console.log ("Vehiculo inválido")
}

// 8. Escribe un programa que reciba un nivel de usuario (admin, editor, visitante) y devuelva los permisos correspondientes.Si recibe otra entrada enviar mensaje "Nivel de usuario inválido"
console.log("Ejercicio 8")

let usuario= "visitante"
switch (usuario) {
  case "admin": console.log ("Todos los permisos"); break;
  case "editor": console.log ("Permisos de edicion"); break;
  case "visitante": console.log ("Permisos de lectura"); break;
  default: console.log ("Nivel de usuario inválido")
}

// 9. Escribe un programa que reciba una fruta (manzana, plátano, naranja) y devuelva su color. Si recibe otra entrada enviar mensaje "Fruta inválida"
console.log("Ejercicio 9")

let fruta= "naranja"
switch (fruta) {
  case "manzana": console.log ("Rojo o verde"); break;
  case "platano": console.log ("Amarillo"); break;
  case "naranja": console.log ("Naranja"); break;
  default: console.log ("Fruta inválida")
}

// 10. Escribe un programa que reciba un tipo de clima (soleado, lluvioso, nublado) y devuelva una recomendación.
console.log("Ejercicio 10")

let clima= "nublado"
switch (clima) {
  case "soleado": console.log ("Usa protector solar"); break;
  case "lluvioso": console.log ("Lleva un paraguas"); break;
  case "nublado": console.log ("Puede que necesites una chamarra"); break;
  default: console.log ("Clima inválido")
}
