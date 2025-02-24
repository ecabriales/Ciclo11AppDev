// ————————————— ejercicio de clase —————————————

// Ejercicio 1: Listar las películas y su categoría
/*
Salida esperada:
    🎭 Drama: El Padrino
    🔥 Acción: Avengers: Endgame
    🎨 Animación: Buscando a Nemo
    🎭 Drama: Pulp Fiction
    🔥 Acción: Gladiador
    🎨 Animación: Toy Story
*/
console.log("Ejercicio 1")
const peliculas = [
    { titulo: "El Padrino", genero: "Drama" },
    { titulo: "Avengers: Endgame", genero: "Acción" },
    { titulo: "Buscando a Nemo", genero: "Animación" },
    { titulo: "Pulp Fiction", genero: "Drama" },
    { titulo: "Gladiador", genero: "Acción" },
    { titulo: "Toy Story", genero: "Animación" },
  ];
 for(let i=0 ; i<peliculas.length ; i++) {
  console.log(peliculas[i].genero +" : "+ peliculas[i].titulo)
 }
 
// Ejercicio 2: Filtrar la película por búsqueda
// Tip: let búsqueda = "Toy Story";
console.log ("Ejercicio 2")

let busqueda = "Toy Story"
const peliculas = [
    { titulo: "El Padrino", genero: "Drama" },
    { titulo: "Avengers: Endgame", genero: "Acción" },
    { titulo: "Buscando a Nemo", genero: "Animación" },
    { titulo: "Pulp Fiction", genero: "Drama" },
    { titulo: "Gladiador", genero: "Acción" },
    { titulo: "Toy Story", genero: "Animación" },
  ];
 for(let i=0 ; i<peliculas.length ; i++) {
  console.log(busqueda+ " es "+ peliculas[i].titulo);
 }


// ***FALTA CORREGIR***
// Toy Story es El Padrino
// Toy Story es Avengers: Endgame
// Toy Story es Buscando a Nemo
// Toy Story es Pulp Fiction
// Toy Story es Gladiador
// Toy Story es Toy Story

 
// Ejercicio 3: Cuántas películas hay por género.
console.log("Ejercicio 3")
let drama=0, accion=0, animacion=0
const peliculas = [
    { titulo: "El Padrino", genero: "Drama" },
    { titulo: "Avengers: Endgame", genero: "Acción" },
    { titulo: "Buscando a Nemo", genero: "Animación" },
    { titulo: "Pulp Fiction", genero: "Drama" },
    { titulo: "Gladiador", genero: "Acción" },
    { titulo: "Toy Story", genero: "Animación" },
  ];


for(let i=0; i<peliculas.length; i++){
  if(peliculas[i].genero == "Drama") {drama++}
  else if(peliculas[i].genero == "Acción") {accion++}
  else if(peliculas[i].genero == "Animación") {animacion++}  }
 console.log("🎭 Drama: " + drama),  console.log("🔥 Acción: " + accion), console.log("🎨 Animación: " + animacion)
