//Revision si hay nombres guardados en el local storage//
let nombre = localStorage.getItem("nombreUsuario");

if (!nombre) {
  nombre = prompt("¡Hola, vamos a organizar tus tareas! Primero lo primero, ¿Cómo te llamas?");
  while (nombre === null || nombre.trim() === "") {
    alert("Por favor, ingresa tu nombre para comenzar");
    nombre = prompt("¿Cómo te llamás?");
  }
  localStorage.setItem("nombreUsuario", nombre);
}

// Bienvenida//
const saludo = document.getElementById("saludoNombre");
saludo.innerText = "Hola, " + nombre;

//Boton +//
const btnAgregar = document.getElementById("botonAdd");

//Array de tareas //
let tareas = [];

const tareasGuardadas = localStorage.getItem("tareas");
if (tareasGuardadas) {
  tareas = JSON.parse(tareasGuardadas);
}

const imputTare = document.getElementById("imputTareas");
const listaTareas = document.getElementById("listaTareas");
const tareasVacio = document.getElementById("tareasVacio");

//Funcion para mostrar las tareas y eliminarlas//
function eliminarTarea(posicion) {
  tareas.splice(posicion, 1); 
  guardarTareas();
  mostrarTareas(); 
}

function mostrarTareas() {
  listaTareas.innerHTML="";

  if (tareas.length === 0) {
    tareasVacio.style.display = "block";
  } else {
    tareasVacio.style.display = "none";
    tareas.forEach((tarea, index)=> {
      listaTareas.innerHTML += 
      `<li class="tareaItem">
      ${index + 1}. ${tarea}
      <button class="btnBorrar" onclick="eliminarTarea(${index})">x</button>
      </li>`;
    });
  }
}

//Funcion para guardar tareas en el local storage//
function guardarTareas() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

//Evento click y prevenir recargar de la pagina//
btnAgregar.addEventListener("click", (event) => { 
 event.preventDefault();

//Funcion para agregar tareas//
    let nuevaTarea = imputTare.value;
  
    if (nuevaTarea !== "") {
      tareas.push(nuevaTarea);
      imputTare.value ="";
      guardarTareas();
      mostrarTareas();
    } else {
      alert("Por favor, agrega una tarea a la lista");
    }
});

mostrarTareas();

//Botones cambia mood//
const containerPadre = document.querySelector(".containerPadre");
const imagenFondo = document.getElementById("imagenFondo");
const btnLightBlue = document.getElementById("lightBlue");
const btnLightPink = document.getElementById("lightPink");

btnLightBlue.addEventListener("click", () => {
  containerPadre.classList.remove("moodPink");
  containerPadre.classList.add("moodBlue");
  imagenFondo.src = "./IMAGENES/lightBlue.jpg";
});

btnLightPink.addEventListener("click", () => {
  containerPadre.classList.remove("moodBlue");
  containerPadre.classList.add("moodPink");
  imagenFondo.src = "./IMAGENES/lightPink.jpg";
});





