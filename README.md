# StudyFlow - App de Tareas 💡

**StudyFlow** es una aplicación web diseñada para ayudarte a organizar tus tareas de forma simple, visual y efectiva. Su diseño minimalista y estilo lofi busca acompañarte mientras estudiás o trabajás, incorporando también un temporizador para mantener la organización. 

---

## Funcionalidades principales

-  Agregar tareas con validaciones
-  Eliminar tareas individualmente
-  Guardado automático de tareas en `localStorage`
-  Recuperación del nombre del usuario desde el almacenamiento local
-  Cambio visual entre dos estilos (azul y rosa), incluyendo imagen de fondo
-  Temporizador Pomodoro (25 minutos) leído desde archivo `.json` usando `fetch`
-  Mensajes interactivos con SweetAlert2

---

## Tecnologías y conceptos utilizados

- **HTML5**: estructura semántica y accesible
- **CSS3**: diseño responsivo, sombras suaves, tipografía personalizada, degrades
- **JavaScript (ES6)**:
  - Manipulación del DOM
  - Arrays y métodos (`push`, `find`, `splice`, `forEach`)
  - Eventos (`addEventListener`)
  - Condicionales y validaciones
  - Almacenamiento en `localStorage`
  - Temporizador con `setInterval` y `clearInterval`
  - `fetch` para obtener datos desde un archivo JSON local
  - Función constructora para estructurar el timer
- **SweetAlert2**: reemplazo de `alert`, `prompt` y `confirm` por una experiencia más amigable
- **JSON**: configuración del timer (duración)

---

## Estructura del proyecto

StudyFlow/
├── index.html
├── app.js
├── doc.json
├── README.md
├── /CSS
│ └── style.css
├── /IMAGENES
│ ├── lightBlue.jpg
│ └── lightPink.jpg
│ └── favicon.png

---

## Cómo usar la aplicación

1. Cloná este repositorio o descargá los archivos.
2. Asegurate de mantener la estructura de carpetas.
3. Abrí `index.html` en un navegador (Chrome, Firefox, etc.).
4. Ingresá tu nombre y comenzá a organizar tus tareas.
5. Usá el temporizador cuando necesites un ciclo de enfoque tipo Pomodoro.
6. Podés cambiar el modo visual entre azul o rosa.

---

## A tener en cuenta

- La app guarda tu nombre y tareas en `localStorage`, por lo que no se pierden al cerrar la pestaña.
- El temporizador no usa una API externa: los datos se leen de un archivo `JSON` local.
- No se utiliza backend, por lo que es 100% estática y funciona localmente.

---

## Autora

Creado por **Micaela Camerini** como parte del curso de JavaScript, aplicando todos los contenidos vistos hasta el momento.

---

## Posibles mejoras futuras

- Agregar edición de tareas
- Contador de tareas completadas
- Sonido al finalizar el timer
- Agregar más estilos visuales

---
