# Proyeco de portafolio Módulo 4 - Elizabeth Vergara

## Requisitos funcionales mínimos

- [x] Home debe mostrar ≥ 5 lugares (pueden ser los mismos del módulo anterior o nuevos), con su
      clima actual.
- [x] Al seleccionar un lugar (click en card/botón/enlace), se debe mostrar la vista de detalle
      correspondiente.
- [x] En la vista de detalle se debe visualizar:
      o El pronóstico diario (lista o cards con día, min, max, estado).
      o La sección “Estadísticas de la semana” con:
       Mínimo, máximo y promedio de temperatura de la semana.
       Cantidad de días por tipo de clima (al menos 2 tipos: por ejemplo, “soleado” y
      “lluvioso”).
       Un mensaje de resumen generado a partir de esos datos.
- [x] El cálculo de estadísticas debe hacerse en JavaScript a partir del arreglo pronosticoSemanal
      de cada lugar (no se permite escribir los resultados “a mano” en el HTML).

## Requisitos técnicos

### Modelado de datos

- [x] Definir en JavaScript un arreglo de lugares donde cada lugar sea un objeto con al menos:
- [x] id, nombre, tempActual, estadoActual
- [x] pronosticoSemanal: arreglo de objetos (cada objeto será un día de la semana) con dia, min, max y estado

### Variables, condicionales, ciclos y funciones

- [x] Utilizar variables y constantes para guardar datos intermedios (suma de temperaturas, contadores, etc.).
- [x] Utilizar ciclos (for, while o similar) para recorrer el pronóstico semanal y:
  - [x] Calcular mínimo, máximo y promedio:
  - [x] Contar cuántos días hay de cada tipo de clima.
- [x] Utilizar condicionales (if, else if, else) para:
  - [x] Evaluar estados del tiempo (ej.: si hay más días soleados que nublados → “Semana mayormente soleada”).
  - [x] Generar el resumen textual de la semana.
- [x] Definir al menos dos funciones:
  - [x] Una función para buscar y obtener el objeto lugar a partir de un id o nombre.
  - [x] Una función para calcular estadísticas a partir del pronosticoSemanal de un lugar y devolver un objeto con los resultados.

## Enlace el repositorio

https://github.com/vergaraelizabeth02/weather-frontend-m2.git
