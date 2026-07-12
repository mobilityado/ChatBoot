# Asistente Abordo 7.0 — IA segura

Esta versión conserva todos los menús, herramientas, videos y documentos. No incluye Semáforo, AVA ni Happy Moments.

## Cómo funciona
1. La pregunta se compara con RESPUESTAS y SINONIMOS de Google Sheets.
2. Si no existe una clave de Gemini, devuelve una respuesta inteligente basada en las mejores coincidencias.
3. Si configuras GEMINI_API_KEY, Gemini redacta una respuesta natural usando únicamente el contenido recuperado del Sheets.
4. Cuando no hay evidencia suficiente, indica que no encontró información y ofrece acudir a un asesor.

## Activar Gemini (opcional)
En Apps Script: Configuración del proyecto > Propiedades de la secuencia de comandos.

Agrega:
- GEMINI_API_KEY = tu clave
- GEMINI_MODEL = gemini-3.5-flash (opcional)

Luego reemplaza Code.gs, guarda y crea una nueva versión de la implementación web.
Nunca pongas la clave en GitHub ni en Google Sheets.

## Publicación
Sube todos los archivos a mobilityado/ChatBoot y limpia la caché del sitio una vez.
