import lugares from "./lugares.js";

// Manejo del DOM con JS
// QuerySelectorAll selecciona todos los elementos. En este caso todos los que tienen clase nav-link
var links = document.querySelectorAll(".nav-link");

links.forEach(function (link) {
  if (link.href === window.location.href) {
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
              <p class="card-text">${lugar.tempActual}°C</p>
            </div>
            <div class="card-body">
              <a class="card-link" href="/detalle.html?id=${
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
