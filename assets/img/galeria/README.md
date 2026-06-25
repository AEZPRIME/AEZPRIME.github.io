# Galería local (opcional)

Esta carpeta solo se usa si decides guardar alguna foto del laboratorio
dentro del propio proyecto en vez de Google Drive. Para usarla, agrega el
archivo aquí y referencia la ruta en `js/data.js` con el campo `src` en
vez de `driveId`, por ejemplo:

```js
{ src: 'assets/img/galeria/foto.jpg' },
```

Por defecto, todas las fotos de la galería se cargan desde Google Drive
(ver el arreglo `GALERIA` en `js/data.js`).
