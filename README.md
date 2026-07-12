# Asistente Abordo 4.0

Esta versión conserva el flujo original, sus videos de Vimeo, documentos PDF, imágenes y enlaces a herramientas. Además, se conecta con Google Sheets mediante Apps Script.

## Archivos clave
- `index.html`: chatbot original mejorado.
- `api-config.js`: URL de la aplicación web de Apps Script.
- `api-integration.js`: carga configuración, avisos, menús y respuestas desde Sheets; registra estadísticas y valoraciones.
- `sw.js` y `manifest.webmanifest`: instalación PWA y respaldo básico sin conexión.

## Publicación
Sube el contenido de esta carpeta a la raíz del repositorio `mobilityado/ChatBoot`.

## Actualizaciones de Apps Script
Cada vez que cambies `Code.gs`, crea una nueva versión desde **Implementar > Administrar implementaciones**. Si cambia la URL `/exec`, actualízala en `api-config.js`.

## Google Sheets
El contenido original permanece dentro de `index.html`. El contenido de Sheets se agrega en la opción **NOVEDADES Y CONTENIDO ACTUALIZABLE**, por lo que no se pierden las herramientas ni videos existentes.
