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
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 20,
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
    id: 3,
    nombre: "Concepción",
    temperaturaActual: 18,
    estadoActual: "Lluvioso",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 16,
        max: 22,
        estado: "Lluvioso",
      },
      {
        dia: "Martes",
        min: 15,
        max: 20,
        estado: "Lluvioso",
      },
      {
        dia: "Miércoles",
        min: 14,
        max: 21,
        estado: "Nublado",
      },
      {
        dia: "Jueves",
        min: 13,
        max: 19,
        estado: "Lluvioso",
      },
      {
        dia: "Viernes",
        min: 15,
        max: 23,
        estado: "Parcialmente nublado",
      },
      {
        dia: "Sábado",
        min: 16,
        max: 24,
        estado: "Nublado",
      },
      {
        dia: "Domingo",
        min: 14,
        max: 20,
        estado: "Lluvioso",
      },
    ],
  },
  {
    id: 4,
    nombre: "La Serena",
    temperaturaActual: 24,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 18,
        max: 32,
        estado: "Soleado",
      },
      {
        dia: "Martes",
        min: 19,
        max: 30,
        estado: "Soleado",
      },
      {
        dia: "Miércoles",
        min: 17,
        max: 28,
        estado: "Parcialmente nublado",
      },
      {
        dia: "Jueves",
        min: 18,
        max: 29,
        estado: "Soleado",
      },
      {
        dia: "Viernes",
        min: 20,
        max: 31,
        estado: "Soleado",
      },
      {
        dia: "Sábado",
        min: 21,
        max: 33,
        estado: "Soleado",
      },
      {
        dia: "Domingo",
        min: 19,
        max: 27,
        estado: "Nublado",
      },
    ],
  },
  {
    id: 5,
    nombre: "Puerto Montt",
    temperaturaActual: 16,
    estadoActual: "Lluvioso",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 12,
        max: 18,
        estado: "Lluvioso",
      },
      {
        dia: "Martes",
        min: 13,
        max: 19,
        estado: "Lluvioso",
      },
      {
        dia: "Miércoles",
        min: 11,
        max: 17,
        estado: "Nublado",
      },
      {
        dia: "Jueves",
        min: 12,
        max: 16,
        estado: "Lluvioso",
      },
      {
        dia: "Viernes",
        min: 14,
        max: 20,
        estado: "Parcialmente nublado",
      },
      {
        dia: "Sábado",
        min: 15,
        max: 21,
        estado: "Nublado",
      },
      {
        dia: "Domingo",
        min: 13,
        max: 18,
        estado: "Lluvioso",
      },
    ],
  },
];

// Para agregar ícono dinámicamente dependiendo del estado del clima
const ICONOS = {
  Soleado: "bi-brightness-high",
  Nublado: "bi-cloud",
  Lluvioso: "bi-cloud-rain-heavy",
  "Parcialmente nublado": "bi-cloud-sun",
};

// Mostrar lugares en el index
const lugaresContainer = document.getElementById("lugares");

const mostrarLugares = () => {
  lugares.forEach((lugar) => {
    const tarjeta = `
    <div class="col">
          <div class="card text-center">
            <div class="card-body">
              <i class="bi ${ICONOS[lugar.estadoActual]} card__icon"></i>
              <h5 class="card-title">${lugar.nombre}</h5>
              <hr />
              <p class="card-text">${lugar.estadoActual}</p>
              <p class="card-text">${lugar.temperaturaActual}°C</p>
            </div>
            <div class="card-body">
              <a href="./detalle.html" class="card-link" href="/detalle.html?id=${
                lugar.id
              }">Ver detalle</a>
            </div>
          </div>
        </div>
        `;

    lugaresContainer.innerHTML += tarjeta;
  });
};

mostrarLugares();

// console.log(lugares);

// TODO: hacer suma de temperaturas, promedio, minimas y máximas
