class Jugador {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}


const listaJugadores = [];

const agregarJug = () => {
    let nombre = prompt(" nombre de jugador");
    let edad = parseInt(prompt(" edad de jugador"));


    let jugadornuevo = new Jugador(nombre, edad);

    listaJugadores.push(jugadornuevo);
    return listaJugadores;
}

agregarJug();




listaJugadores.forEach((Jugadores) => {
    console.log(`este jugador es ${Jugadores.nombre} y su edad ${Jugadores.edad}`)
});




let primerPregunta = prompt("¿ Cuál es el primer libro de la biblia?").toLowerCase();
if (primerPregunta == "genesis") {
    alert(" Tu respuesta es correcta");
} else {
    alert(" Respuesta incorrecta");
}


let segundaPregunta = prompt("¿ Cuál es el nombre del primer hijo de abraham ?").toLowerCase();
if (segundaPregunta == "ismael.") {
    alert(" Tu respuesta es correcta");
} else {
    alert(" Respuesta incorrecta");
}

let terceraPregunta = prompt("¿quién mato a golitat").toLowerCase();
if ((terceraPregunta == "DAVID") || (terceraPregunta == "david")) {
    alert("Tu respuesta es correcta, david mato a goliat");
} else {
    alert(" tu respuesta es incorrecta");
}

let cuartaPregunta = parseInt(prompt(" a que edad murio jesus")).toLowerCase();
if (cuartaPregunta >= 0 && cuartaPregunta <= 20) {
    alert(" ups, no murio tan joven");
} else if (cuartaPregunta >= 25 && cuartaPregunta <= 30) {
    alert(" casi aciertas");
} else if (cuartaPregunta == 33) {
    alert("asi es, jesus murio a sus 33 años de edad");
}

let quintaPregunta = prompt(" te resulto facil el cuestionario. ingresa  `salir`para salir").toLowerCase();
while (quintaPregunta != "salir") {
    alert(`la respuesta ingresada es ${quintaPregunta}`);
    quintaPregunta = prompt(" te resulto facil el cuestionario. ingresa  `salir`para salir");
}

let sextaPregunta = prompt(" menciona el nombre de un discipulo de jesus").toLowerCase();

switch (sextaPregunta) {
    case "juan":
        alert("correcto, juan fue un discipulo de jesus, conocido como le intimo");
        break;
    case "pedro":
        alert("correcto, pedro fue un discipulo de jesus, conocido por caminar sobre el agua");
        break;
    case " santiago":
        alert("correcto, santiago fue un discipulo de jesus");
        break;

    case "andres":
        alert("correcto, andres fue discipulo de jesus, era hermano de pedro");
        break;

    case "felipe":
        alert("correcto, felipe fue discipulo de jesus");
        break;
    case "judas iscariote":
        alert("correcto, judas iscariote fue discipulo de jesus, fue quien lo traiciono");
        break;
    case "mateo":
        alert("correcto, mateo fue discipulo de jesus, era recaudador de impuestos");
        break;
    case "tomas":
        alert("correcto, tomas fue discipulo de jesus, conocido como el incredulo");
        break;
    case "santiago hijo de alfeo":
        alert("correcto, santiago hijo de alfeo fue discipulo de jesus");
        break;
    case "bartolome":
        alert("correcto, bartolome fue discipulo de jesus");
        break;
    case "judas no el iscariote":
        alert("correcto, judas no el iscariote fue discipulo de jesus");
        break;
    case "tadeo":
        alert("correcto, tadeo fue discipulo de jesus, era hermano de pedro");
        break;
    default:
        alert(" el nombre ingresado no pertence a ningun discipulo de jesus");



}

function pregunta7() {
    let respuesta = parseInt(prompt(" segun el antiguo testamento, cuantas tribus de israel existen?"));
    alert(` segun la biblia son ${respuesta}`);
}

pregunta7();