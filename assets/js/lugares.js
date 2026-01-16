// Array de lugares: Contendrá listado de ciudades (mínimo 5)
/* 
id, nombre del lugar, temperatura actual, estadoActual, pronostico semanal (array de objetos)
*/
const lugares = [
  {
    id: 1,
    nombre: "Panguipulli",
    tempActual: 28,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 9,
        max: 25,
        estado: "Soleado",
      },
      {
        dia: "Martes",
        min: 11,
        max: 23,
        estado: "Soleado",
      },
      {
        dia: "Miércoles",
        min: 9,
        max: 31,
        estado: "Soleado",
      },
      {
        dia: "Jueves",
        min: 10,
        max: 28,
        estado: "Parcialmente nublado",
      },
      {
        dia: "Viernes",
        min: 11,
        max: 25,
        estado: "Parcialmente nublado",
      },
      {
        dia: "Sábado",
        min: 10,
        max: 22,
        estado: "Parcialmente nublado",
      },
      {
        dia: "Domingo",
        min: 8,
        max: 23,
        estado: "Parcialmente nublado",
      },
    ],
  },
  {
    id: 2,
    nombre: "Rio Bueno",
    tempActual: 24,
    estadoActual: "Nublado",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 9,
        max: 21,
        estado: "Nublado",
      },
      {
        dia: "Martes",
        min: 9,
        max: 27,
        estado: "Soleado",
      },
      {
        dia: "Miércoles",
        min: 11,
        max: 27,
        estado: "Soleado",
      },
      {
        dia: "Jueves",
        min: 13,
        max: 24,
        estado: "Parcialmente nublado",
      },
      {
        dia: "Viernes",
        min: 10,
        max: 21,
        estado: "Nublado",
      },
      {
        dia: "Sábado",
        min: 8,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Domingo",
        min: 8,
        max: 24,
        estado: "Soleado",
      },
    ],
  },
  {
    id: 3,
    nombre: "Lanco",
    tempActual: 18,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 7,
        max: 26,
        estado: "Soleado",
      },
      {
        dia: "Martes",
        min: 9,
        max: 24,
        estado: "Nublado",
      },
      {
        dia: "Miércoles",
        min: 8,
        max: 31,
        estado: "Soleado",
      },
      {
        dia: "Jueves",
        min: 14,
        max: 20,
        estado: "Parcialmente nublado",
      },
      {
        dia: "Viernes",
        min: 12,
        max: 18,
        estado: "Lluvioso",
      },
      {
        dia: "Sábado",
        min: 15,
        max: 21,
        estado: "Soleado",
      },
      {
        dia: "Domingo",
        min: 13,
        max: 19,
        estado: "Nublado",
      },
    ],
  },
  {
    id: 4,
    nombre: "Mariquina",
    tempActual: 25,
    estadoActual: "Parcialmente nublado",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 15,
        max: 25,
        estado: "Parcialmente nublado",
      },
      {
        dia: "Martes",
        min: 9,
        max: 31,
        estado: "Soleado",
      },
      {
        dia: "Miércoles",
        min: 14,
        max: 24,
        estado: "Nublado",
      },
      {
        dia: "Jueves",
        min: 17,
        max: 26,
        estado: "Soleado",
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
        max: 27,
        estado: "Soleado",
      },
      {
        dia: "Domingo",
        min: 14,
        max: 24,
        estado: "Nublado",
      },
    ],
  },
  {
    id: 5,
    nombre: "Los Lagos",
    tempActual: 16,
    estadoActual: "Lluvioso",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 10,
        max: 16,
        estado: "Lluvioso",
      },
      {
        dia: "Martes",
        min: 11,
        max: 17,
        estado: "Nublado",
      },
      {
        dia: "Miércoles",
        min: 9,
        max: 15,
        estado: "Lluvioso",
      },
      {
        dia: "Jueves",
        min: 12,
        max: 18,
        estado: "Parcialmente nublado",
      },
      {
        dia: "Viernes",
        min: 10,
        max: 16,
        estado: "Lluvioso",
      },
      {
        dia: "Sábado",
        min: 13,
        max: 19,
        estado: "Soleado",
      },
      {
        dia: "Domingo",
        min: 11,
        max: 17,
        estado: "Nublado",
      },
    ],
  },
];

export default lugares;
