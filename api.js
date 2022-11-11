function ConsultarApi() {

  const url = "./jugadores.json";

  fetch(url)

    .then(respuesta => {
      return respuesta.json()
    })
    .then(resultado => {
      domHTML(resultado);
      console.log(resultado)
    })
};



function domHTML(datos) {

  const jugadores = document.querySelector("#jugadores");


  let participantes = "";


  datos.forEach(element => {

    const {
      img,
      nombre,
      usuario,
      puntaje

    } = element;

    participantes += `<div class="cajas"> <img src="${img}"> <p> ${nombre}</p> <p> ${usuario}</p>  <p> <span> ⭐</span> <strong> ${puntaje}</strong></p></div>`

    jugadores.innerHTML = participantes;


  });

};






























ConsultarApi();