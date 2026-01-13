import lugares from "./lugares.js";

// QuerySelectorAll selecciona todos los elementos. En este caso todos los que tienen clase nav-link
var links = document.querySelectorAll(".nav-link");

links.forEach(function (link) {
  if (link.href === window.location.href) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// Para agregar ícono dinámicamente dependiendo del estado del clima
const ICONOS = {
  Soleado: "bi-brightness-high",
  Nublado: "bi-cloud",
  Lluvioso: "bi-cloud-rain-heavy",
  "Parcialmente nublado": "bi-cloud-sun",
};

// 1. Obtener ID enviado por parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);

// Extraer id de los parametros
const locationId = urlParams.get("id");
// console.log(locationId);

// 2. Filtrar lugar del array a partir del ID
const lugarEncontrado = () => {
  const lugar = lugares.find((lugar) => {
    console.log(`Buscando en array lugares el lugar con id: ${locationId}`);
    return lugar.id == locationId;
  });
  return lugar;
};

// Ejecutar función para buscar lugar a través de su ID
const ciudadActual = lugarEncontrado();

// 3. Capturar contenedor de información del lugar
const lugarContainer = document.getElementById("lugar");

const mostrarLugar = () => {
  const content = `
            <h2 class="my-3">El tiempo hoy</h2>
            <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div
                class="col-md-4 d-flex justify-content-center align-items-center"
              >
                <i class="card__icon-h bi ${
                  ICONOS[ciudadActual.estadoActual]
                }"></i>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h2 class="card-title">${ciudadActual.nombre}</h2>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">${
                      ciudadActual.estadoActual
                    }</li>
                    <li class="list-group-item">Temperatura: ${
                      ciudadActual.tempActual
                    }°C</li> 
                  </ul>
                  <p class="card-text">
                    <small class="text-body-secondary"
                      >Ultima actualización hace 3 minutos</small
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>`;

  lugarContainer.innerHTML += content;
};

mostrarLugar();

// Mostrar sección pronóstico semanal
const pronosticoContainer = document.getElementById("pronosticoSemanal");
// console.log(ciudadActual.pronosticoSemanal);

ciudadActual.pronosticoSemanal.forEach((dia) => {
  const content = `
              <li class="list-group-item">
                <i class="card__icon_vertical bi ${ICONOS[dia.estado]}"></i>${
    dia.dia
  }: ${dia.max}°C
              </li>
  
  `;
  pronosticoContainer.innerHTML += content;
});

// Estadisticas de la semana (mínimas y máximas)
// 5. Estadísticas semanales y reunir datos

// 5.1 Capturar elementis de la tabla (td -> table datacell)
const minTempContainer = document.getElementById("minTemp");
const maxTempContainer = document.getElementById("maxTemp");
const avTempContainer = document.getElementById("avTemp");

// Función para formatear número decimales, que en vez de punto tengan coma
const FormatFloatNumber = (num) => {
  return num.toLocaleString("es-CL");
};

const definirEstadisticasPredominante = (conteoEstados) => {
  let estadoPredominante;

  if (
    conteoEstados.Soleado > conteoEstados.Nublado &&
    conteoEstados.Soleado > conteoEstados.Lluvioso &&
    conteoEstados.Soleado > conteoEstados["Parcialmente nublado"]
  ) {
    estadoPredominante = "soleado";
  } else if (
    conteoEstados.Nublado > conteoEstados.Soleado &&
    conteoEstados.Nublado > conteoEstados.Lluvioso &&
    conteoEstados.Nublado > conteoEstados["Parcialmente nublado"]
  ) {
    estadoPredominante = "Nublado";
  } else if (
    conteoEstados.Lluvioso > conteoEstados.Soleado &&
    conteoEstados.Lluvioso > conteoEstados.Nublado &&
    conteoEstados.Lluvioso > conteoEstados["Parcialmente nublado"]
  ) {
    estadoPredominante = "Lluvioso";
  } else if (
    conteoEstados["Parcialmente nublado"] > conteoEstados.Soleado &&
    conteoEstados["Parcialmente nublado"] > conteoEstados.Nublado &&
    conteoEstados["Parcialmente nublado"] > conteoEstados.Lluvioso
  ) {
    estadoPredominante = "Parcialmente Nublado";
  } else {
    estadoPredominante = "variado";
  }

  return estadoPredominante;
};

// 5.2 Funcion para calcular estadísticas, devolverá un objeto con los resultados.
const estadisticasPronostico = () => {
  // 5.2.1 Obtener temperatura mínima semanal
  const temperaturasMinimas = ciudadActual.pronosticoSemanal.map(
    (dia) => dia.min
  );
  // console.log(temperaturasMinimas);
  const minimaSemanal = Math.min(...temperaturasMinimas);
  console.log(minimaSemanal);

  //5.2.2 Obtener temperatura máxima semanal
  const temperaturasMaximas = ciudadActual.pronosticoSemanal.map(
    (dia) => dia.max
  );
  const maximaSemanal = Math.max(...temperaturasMaximas);
  console.log(maximaSemanal);

  // 5.2.3 Calcular promedio de temeraturas semanal
  const sumaTemperaturasMaximas = temperaturasMaximas.reduce(
    (acumulador, actual) => acumulador + actual,
    0
  );

  // Promedio = sumaElementos / cantidadElementos
  let promedioSemanal = parseFloat(
    (sumaTemperaturasMaximas / temperaturasMaximas.length).toFixed(2)
  );

  // TODO: Crear mensaje reseumen de las estadisticas: cantidad de dias por tipo de clima, resumen textual (semana mayormente Soleada, nublada, etc)
  // 5.2.4 Calcular contedo de dias por estado del clima
  const estadosSemanal = ciudadActual.pronosticoSemanal.map(
    (dia) => dia.estado
  );

  // console.log(estadoSemanal);
  const estadosUnicos = [...new set(estadosSemanal)];
  // console.log(estadosUnicos);

  const conteoEstados = {};

  estadosUnicos.forEach((estado) => {
    conteoEstados[estado] = ciudadActual.pronosticoSemanal.filter(
      (dia) => dia.estado === estado
    ).length;
    // console.log(conteoEstados);
  });

  // 5.2.5 Determinar estado predominante de la semana (el más frecuente) de la semana
  const estadoPredominante = definirEstadoPredominante(conteoEstados);

  return {
    minimaSemanal,
    maximaSemanal,
    promedioSemanal: FormatFloatNumber(promedioSemanal),
    conteoEstados,
    estadoPredominante,
  };
};

const estadisticas = estadisticasPronostico();

minTempContainer.textContent = estadisticas.minimaSemanal;
maxTempContainer.textContent = estadisticas.maximaSemanal;
avTempContainer.textContent = estadisticas.promedioSemanal;

console.log(estadisticas);

// 5.2.6 Crear resumen textual
const generarMensajeResumen = (estado, tempmax, tempmin) => {
  return `Semana con clima mayormente ${estado}. La temperatura máxima de la semana fue ${tempmax}°C, La minima de ${tempmin}°C.`;
};

const mensajeResumen = generarMensajeResumen(
  estadisticas.estadoPredominante,
  estadisticas.maximaSemanal,
  estadisticas.minimaSemanal
);
console.log(mensajeResumen);

const containerMensajeResumen = document.getElementById("resumen");

containerMensajeResumen.innerHTML = `<p class="text-muted">${mensajeResumen}</p>`;
