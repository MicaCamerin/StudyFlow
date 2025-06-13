//Bienvenida//
let nombre = prompt ("¡Hola, vamos a organizar tus tareas! Primero lo primero, ¿Como te llamas?")
const saludo = document.getElementById("saludoNombre");
saludo.innerText = "Hola, " + nombre;

//Formulario - boton +//
const btnAgregar = document.getElementById("botonAdd");

//Array de tareas //
let tareas = [];

const imputTare = document.getElementById("imputTareas");
const botonAdd = document.getElementById("botonAdd");
const listaTareas = document.getElementById("listaTareas");
const tareasVacio = document.getElementById("tareasVacio");

//Funcion para mostrar las tareas y eliminarlas//
function mostrarTareas() {
  listaTareas.innerHTML="";
  if (tareas.length === 0) {
    tareasVacio.style.display = "block";
  } else {
    tareasVacio.style.display = "none";
    tareas.forEach((tarea, index)=> {
      listaTareas.innerHTML += `<li>${index + 1}. ${tarea}</li>`;
    });
  }
}

//Evento click y prevenir recargar de la pagina//
btnAgregar.addEventListener("click", (event) => { 
 event.preventDefault();

//Funcon para agregar tareas//

    let nuevaTarea = imputTare.value;
  
    if (nuevaTarea !== "") {
      tareas.push(nuevaTarea);
      imputTare.value ="";
      mostrarTareas();
    } else {
      alert("No se ingresaron tareas.");
    }
});






