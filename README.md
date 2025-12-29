gg# Proyeco de portafolio modulo 2

=======

# Proyeco de portafolio modulo 2 - Elizabeth Vergara

1. Propósito
   Desarrollar la primera versión (MVP) del frontend de una aplicación de clima, aplicando **HTML5 semántico**,
   **Bootstrap** para estilos y **diseño responsivo**, y **JavaScript** básico para la interacción. El
   trabajo se versiona en **Git/GitHub** e incluye un **README** descriptivo.

--

## Aplicacion del tiempo

al hacer click en la localidad, te mostrará el detalle del tiempo actual y el de toda la semana.

## Requisitos Funcionales

- Ejempo de uso de JS 1:

```js
cardLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    window.location.href = "./detalle.html";
  });
});
```

- Ejemplo de us de JS 2: modificando claes dependiendo de la ubicación:

```js
links.forEach(function (link) {
  if (link.href == window.location.href) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
```

## Segunda etapa del proyecto

- Se aplicó Sass intregrando la estructura básica de carpetas con sus archivos correspondientes.

1. Abstracts

- \_mixins.scss
- \_variables.scss

2. Base

- \_base.scss

3. Components

- \_card.scss
- \_carousel.scss

4. layout

- \_footer.scss
- \_main.scss
- \_navbar.sccs

5. Pages
6. Themes
7. Vendors

## GitHub enlace

https://github.com/vergaraelizabeth02/weather-frontend-m2.git
