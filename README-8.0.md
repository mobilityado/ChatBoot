# Asistente Abordo 8.0 — Atención guiada

Esta versión agrega:

- Apertura directa de WhatsApp en Android/iPhone, con respaldo `wa.me`.
- Formulario previo con marca, número de empleado opcional y motivo.
- Respuestas relacionadas después de cada contestación.
- Botón para reportar información desactualizada.
- Fecha de actualización tomada de `CONFIGURACION!ULTIMA_ACTUALIZACION`.

## Apps Script

Reemplaza `Code.gs` por el incluido y publica una **nueva versión** de la aplicación web. No necesitas agregar hojas nuevas: los reportes se guardan en `VALORACIONES` con el valor `DESACTUALIZADA` y también generan un evento en `ESTADISTICAS`.

## Privacidad

El número de empleado no se almacena ni se envía a Google Sheets. Solo se utiliza para construir el mensaje que el propio usuario abre en WhatsApp.
