// Manejo del DOM con JS
// QuerySelectoAll selecciona todos los elementos. En este caso todos los que tienen clase nav-link
var links = document.querySelectorAll(".nav-link");

links.forEach(function (link) {
  if (link.href == window.location.href) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

var cardLinks = document.querySelectorAll(".card-link");
// console.log(cardLinks);
cardLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    window.location.href = "./detalle.html";
  });
});

// Array de lugares: contendrá listado de ciudades
/*
id, nombre del lugar, temeratura actual, estado actual, pronostico semanal (array de objetos)
*/
const lugares = [
  {
    id: 1,
    nombres: "Santiago",
    temperaturaActual: 20,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 16,
        max: 30,
        estado: "Soleado",
      },
      {
        dia: "Martes",
        min: 18,
        max: 28,
        estado: "Nublado",
      },
      {
        dia: "Miércoles",
        min: 15,
        mas: 25,
        estado: "Lluvioso",
      },
      {
        dia: "Jueves",
        min: 17,
        max: 14,
        estado: "Soleado",
      },
      {
        dia: "Viernes",
        min: 19,
        max: 29,
        estado: "Parcialmente nublado",
      },
      {
        dia: "Sábado",
        min: 20,
        max: 31,
        estado: "Soleado",
      },
      {
        dia: "Domingo",
        min: 18,
        max: 26,
        estado: "Lluvioso",
      },
    ],
  },
  {
    id: 2,
    nombre: "Valparaiso",
    temperaturaActual: 22,
    estadoActual: "Nublado",
    pronosticoSemanal: [{
      dia: "Lunes",
      min:
    }],
  },
];

// TODO: hacer suma de temperaturas, promedio, minimas y máximas
