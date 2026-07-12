# Asistente Abordo 9.0 — IA + Panel Administrativo

## Acceso al panel

Abre `https://mobilityado.github.io/ChatBoot/admin.html`.

Usuario: Administrador
Contraseña inicial: 485218

La contraseña se valida en Apps Script mediante SHA-256; no se encuentra en el JavaScript público.

## Actualización obligatoria de Apps Script

1. Abre Google Sheets > Extensiones > Apps Script.
2. Sustituye Code.gs por el incluido en este proyecto.
3. Ejecuta una vez `configurarAdministrador()` y concede permisos.
4. Implementar > Administrar implementaciones > Editar > Nueva versión > Implementar.
5. Mantén acceso como “Cualquier usuario” y ejecución como propietario.

## Funciones del panel

- Respuestas: crear, editar y eliminar.
- Menús y submenús.
- Avisos.
- Contactos.
- Configuración general.
- Sinónimos de búsqueda.

Los cambios se escriben directamente en Google Sheets.

## Seguridad

Cambia la contraseña desde Apps Script ejecutando:

`cambiarClaveAdministrador("NuevaContraseñaSegura")`

No publiques Code.gs en GitHub si prefieres mantener toda la lógica del backend privada. El sitio no necesita ese archivo para funcionar.
