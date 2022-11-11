let INDEX_PREGUNTA = 0

let puntaje = 0


cargarPregunta(INDEX_PREGUNTA);



function cargarPregunta(index) {

    objetoPregunta = baseDePreguntas[index]
    opciones = [...objetoPregunta.incorrectas]
    opciones.push(objetoPregunta.respuesta)
    opciones.sort(() => Math.random() - 0.5)
    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta

    document.getElementById("opcion-1").innerHTML = opciones[0]

    document.getElementById("opcion-2").innerHTML = opciones[1]

    document.getElementById("opcion-3").innerHTML = opciones[2]
    
    document.getElementById("opcion-4").innerHTML = opciones[3]
}
async function seleccionarOpción(index) {
    let validezRespuesta = opciones[index] == objetoPregunta.respuesta
    if (validezRespuesta) {

        await swal.fire({
            title: "Respuesta correcta",
            text: "La respuesta es correcta",
            icon: "success"

        });
        puntaje++
    } else {
        await swal.fire({
            title: "Respuesta Incorrecta",
            text: `La respuesta correcta es ${objetoPregunta.respuesta}`,
            icon: "error"

        });
    }
    INDEX_PREGUNTA++;

    if (INDEX_PREGUNTA >= baseDePreguntas.length) {

        await swal.fire({
            title: "Partida terminada",
            text: `Tu puntaje es de ${puntaje}/${baseDePreguntas.length}`,



        });
        INDEX_PREGUNTA = 0;
        puntaje = 0;
    }


    cargarPregunta(INDEX_PREGUNTA);
}

function ayuda() {
    Swal.fire({
        title: 'Ayuda',
        text: objetoPregunta.ayuda,
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
}