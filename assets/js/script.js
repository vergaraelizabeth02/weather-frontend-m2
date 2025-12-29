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
    nombre: "Arica",
    tempActual: 20,
    estadoActual: "Nubes y Claros",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 15,
        max: 22,
        estado: "Nubes y claros",
      },
      {
        dia: "Martes",
        min: 15,
        max: 21,
        estado: "Soleado",
      },
      {
        dia: "Miércoles",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Jueves",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Viernes",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Sábado",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Domingo",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
    ],
  },
  {
    id: 2,
    nombre: "Tarapacá",
    tempActual: 26,
    estadoActual: "Nubes y Claros",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 15,
        max: 22,
        estado: "Nubes y claros",
      },
      {
        dia: "Martes",
        min: 15,
        max: 21,
        estado: "Soleado",
      },
      {
        dia: "Miércoles",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Jueves",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Viernes",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Sábado",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Domingo",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
    ],
  },
  {
    id: 3,
    nombre: "Antofagasta",
    tempActual: 20,
    estadoActual: "Nubes y Claros",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 15,
        max: 22,
        estado: "Nubes y claros",
      },
      {
        dia: "Martes",
        min: 15,
        max: 21,
        estado: "Soleado",
      },
      {
        dia: "Miércoles",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Jueves",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Viernes",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Sábado",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Domingo",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
    ],
  },
  {
    id: 4,
    nombre: "Atacama",
    tempActual: 24,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 15,
        max: 22,
        estado: "Nubes y claros",
      },
      {
        dia: "Martes",
        min: 15,
        max: 21,
        estado: "Soleado",
      },
      {
        dia: "Miércoles",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Jueves",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Viernes",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Sábado",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Domingo",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
    ],
  },
  {
    id: 5,
    nombre: "Coquimbo",
    tempActual: 19,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 15,
        max: 22,
        estado: "Nubes y claros",
      },
      {
        dia: "Martes",
        min: 15,
        max: 21,
        estado: "Soleado",
      },
      {
        dia: "Miércoles",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Jueves",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Viernes",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Sábado",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Domingo",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
    ],
  },
];
