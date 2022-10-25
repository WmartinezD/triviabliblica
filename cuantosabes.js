class Jugador {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}


const listaJugadores = [{
        nombre: "walter",
        edad: 29
    },
    {
        nombre: "damian",
        edad: 26
    },
    {
        nombre: "matias",
        edad: 24
    },
];

const agregarJug = () => {
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);


    let jugadornuevo = new Jugador(nombre, edad);

    listaJugadores.push(jugadornuevo);
    localStorage.setItem("jugadores",JSON.stringify(listaJugadores));

}

agregarJug();

listaJugadores.forEach(jugador => {
    let contenedorjug = document.createElement("div");
    contenedorjug.innerHTML = `
    <p> ${jugador.nombre}<p>
    <p>${jugador.edad} </p>`;

    document.querySelector("#jugadores").append(contenedorjug);
});



const parrafo = document.querySelector("#parrafo");
const boton = document.getElementById("btn");

const escribir = () => {
    let texto = prompt("fue dificil?");
    parrafo.innerHTML = texto;

}

boton.addEventListener("click", escribir);



let contedorpreguntas = document.createElement("div")
let primerPregunta = prompt("¿ Cuál es el primer libro de la biblia?")
if (primerPregunta == "genesis") {
    alert(" Tu respuesta es correcta");
} else {
    alert(" Respuesta incorrecta");
}
localStorage.setItem(" pregunta", primerPregunta);

let segundaPregunta = prompt("¿ Cuál es el nombre del primer hijo de abraham ?");
if (segundaPregunta == "ismael.") {
    alert(" Tu respuesta es correcta");
} else {
    alert(" Respuesta incorrecta");
}
localStorage.setItem(" pregunta", segundaPregunta);


let terceraPregunta = prompt("¿quién mato a golitat").toLowerCase();
if ((terceraPregunta == "DAVID") || (terceraPregunta == "david")) {
    alert("Tu respuesta es correcta, david mato a goliat");
} else {
    alert(" tu respuesta es incorrecta");
}
localStorage.setItem(" pregunta", terceraPregunta);
let cuartaPregunta = parseInt(prompt(" a que edad murio jesus"))
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