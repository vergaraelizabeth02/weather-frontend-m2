# Proyeco de portafolio modulo 2
1) Propósito
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
    link.addEventListener('click', function (){
        window.location.href = './detalle.html'
    })
})
```
- Ejemplo de us de JS 2: modificando claes dependiendo de la ubicación:
```js
links.forEach(function (link) {
    if (link.href == window.location.href) {
    link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});