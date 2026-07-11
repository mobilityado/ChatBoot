# Asistente Abordo 2.0

Proyecto listo para GitHub Pages.

## Publicación
1. Sube **el contenido de esta carpeta** a la raíz del repositorio `ChatBoot`.
2. En GitHub abre **Settings > Pages**.
3. Selecciona **Deploy from a branch**, rama `main`, carpeta `/root`.
4. Espera a que GitHub publique la nueva versión.

## Archivos principales
- `index.html`: interfaz.
- `styles.css`: diseño adaptable.
- `content.js`: preguntas, respuestas y vínculos.
- `app.js`: navegación, búsqueda, voz, visor y estadísticas locales.
- `manifest.webmanifest` y `sw.js`: instalación PWA.

## Actualizar respuestas
Edita únicamente `content.js`. Mantén la estructura de cada nodo.

## Estadísticas
Se almacenan de forma anónima en el navegador mediante `localStorage`. No se envían datos a servidores. Para estadísticas centralizadas se requiere conectar Google Apps Script.
