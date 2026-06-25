# LABTECA — Biblioteca de Laboratorio Clínico

Sitio estático (HTML, CSS y JavaScript separados) para mostrar y leer libros
de laboratorio clínico alojados en Google Drive, sin exponer nunca la
interfaz de Drive al usuario final.

## Estructura del proyecto

```
labteca/
├── index.html                 → estructura de la página (HTML)
├── README.md
├── css/
│   └── style.css              → todos los estilos (colores, tipografía, responsive, tema oscuro)
├── js/
│   ├── data.js                 → SOLO datos: categorías, libros y galería
│   └── main.js                 → lógica: filtros, búsqueda, modal lector, galería, tema
└── assets/
    ├── icons/                   → favicon (svg, ico, png en varios tamaños)
    └── img/
        ├── galeria/             → vacía; solo se usa si guardas alguna foto local (opcional)
        └── portadas/            → portadas propias de cada libro (aún vacías)
            ├── parasitologia/  ├── insertos/
            ├── hematologia/    ├── microbiologia/
            ├── uroanalisis/    ├── inmunologia/
            ├── cultivos/       ├── bioquimica/
            ├── anatomia/       └── general/
```

Todo el catálogo y la galería de fotos están alojados en Google Drive — el
proyecto en sí pesa apenas unos cientos de KB, nada de PDFs ni fotos
pesadas dentro del zip.

## Categorías

`parasitologia`, `hematologia`, `uroanalisis`, `cultivos`, `anatomia`,
`bioquimica`, `insertos`, `microbiologia`, `inmunologia`, `general` (manuales
de referencia amplios, como "La Clínica y el Laboratorio" de Balcells, que
no son específicos de una sola área).

## Cómo ver el sitio

Abre `index.html` con doble clic, o súbelo a cualquier hosting estático
(GitHub Pages, Netlify, Vercel, hosting compartido, etc.). No necesita
servidor ni instalación: es HTML, CSS y JS puros.

## Cómo agregar un libro

Abre `js/data.js` y copia un bloque dentro del arreglo `LIBROS`:

```js
{
  id: 58,
  categoria: 'uroanalisis',
  codigo: 'URO-08',
  titulo: 'Nombre del libro',
  autor: 'Autor',
  edicion: 'Edición',
  descripcion: 'Descripción breve.',
  driveId: 'ID_DEL_ARCHIVO_DE_DRIVE'  // el código entre "/d/" y "/view" del enlace
}
```

**Importante:** en Google Drive, cada archivo debe compartirse como
*"Cualquiera con el enlace puede ver"*, o la portada y el lector no van a
cargar.

Si alguna vez quieres agregar un documento que ya tengas guardado en el
propio proyecto (sin pasar por Drive), usa el campo `archivo` en vez de
`driveId`, apuntando a una ruta dentro de `assets/`:
```js
{ ..., archivo: 'assets/algo/documento.pdf' }
```

## Cómo poner tu propia portada a un libro

Cuando tengas las imágenes de portada, guárdalas en
`assets/img/portadas/<categoría>/` y agrega el campo `portada` al libro:
```js
{
  ...
  portada: 'assets/img/portadas/parasitologia/PARA-01.jpg'
}
```
Si no agregas `portada`, el sitio sigue mostrando automáticamente la
miniatura de Drive — no se rompe nada mientras tanto.

## Galería de imágenes del laboratorio

Las fotos ya **no se guardan dentro del proyecto** (eso hacía el zip muy
pesado y difícil de descargar). Ahora cada foto vive en Google Drive, igual
que los libros, y se referencia por su `driveId` en el arreglo `GALERIA`
de `js/data.js`:
```js
{ driveId: 'ID_DE_LA_IMAGEN_EN_DRIVE' },
```
**Importante:** la imagen en Drive debe compartirse como *"Cualquiera con
el enlace puede ver"*, igual que los libros.

Se muestran en un **paginador de tamaño fijo**: 12 fotos por página, con
flechas `‹ ›` y "Página X / Y" — la cuadrícula nunca cambia de tamaño ni de
posición. Al tocar una foto se abre un visor de pantalla completa que
recorre todas las fotos (no solo la página actual), con flechas, deslizar
con el dedo y las flechas del teclado.

Si alguna vez prefieres usar una foto guardada dentro del propio proyecto
en lugar de Drive, sigue siendo posible con el campo `src` en vez de
`driveId`:
```js
{ src: 'assets/img/galeria/foto.jpg' },
```

## Cómo funciona el "ocultamiento" de Drive

- **Portada del libro:** miniatura de Drive (`/thumbnail?id=...`), que no
  muestra ninguna interfaz de Drive.
- **Botón "Leer":** abre un visor propio (modal) que carga el visor oficial
  `/preview` de Drive dentro de un recuadro recortado, para que la barra
  superior de Drive quede fuera de la vista. Incluye botones propios de
  zoom (**+ / −**), ya que el visor de Drive no permite pinch-zoom dentro
  del recuadro recortado.
- **Botón "Descargar":** enlace directo `uc?export=download&id=...`.

### Límites a tener en cuenta
- El recorte de la barra de Drive es un ajuste visual por píxeles (variable
  `--drive-bar-offset` en `css/style.css`); puede variar levemente según el
  navegador o el tamaño de pantalla.
- Archivos de Drive mayores a 100 MB pueden mostrar la pantalla de
  confirmación de Google antes de descargar — eso lo controla Google, no
  el sitio.
- Un libro con la etiqueta "Falta compartir en Drive" significa que el
  archivo todavía no tiene permiso público de lectura.

## Tema claro / oscuro

Botón de sol/luna en el encabezado. El tema claro es el de siempre, sin
cambios. El oscuro usa **negro puro** como base con un fondo animado tipo
espacio (estrellas titilando + nebulosas en los mismos tonos violeta/teal
de la marca) detrás de las secciones — las tarjetas y superficies se
mantienen en tonos oscuros sólidos para que el texto siga siendo legible.
La preferencia se guarda en el navegador de quien lo use.

## Estabilidad del diseño (nada se mueve ni se desborda)

Se reforzó el CSS para que ningún elemento empuje el ancho de la página:
- `overflow-x: hidden` en `html`/`body` como salvaguarda general.
- La gradilla de tubos del inicio y las cuadrículas de libros/galería usan
  `min-width:0` y, en el caso de la gradilla, desplazamiento horizontal
  propio en vez de poder ensanchar la página.
- Las miniaturas de la galería usan columnas fijas por tamaño de pantalla
  (2 / 3 / 4) en vez de un cálculo automático que podía variar.
