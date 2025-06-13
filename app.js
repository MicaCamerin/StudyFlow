//Bienvenida//
let nombre = prompt ("¡Hola, vamos a organizar tus tareas! Primero lo primero, ¿Como te llamas?")
const saludo = document.getElementById("saludoNombre");
saludo.innerText = "Hola, " + nombre;

//Formulario - boton +//
const btnAgregar = document.getElementById("botonAdd");

//Evento click y prevenir recargar de la pagina//
btnAgregar.addEventListener("click", (event) => {
 event.preventDefault();
});

//Array de tareas //
let tareas = [];

const imputTare = document.getElementById("imputTareas");
const botonAdd = document.getElementById("botonAdd");
const listaTareas = document.getElementById("listaTareas");
const tareasVacio = document.getElementById("tareasVacio");

//Funcion para mostrar las tareas//
function mostrarTareas() {
  listaTareas.innerHTML="";
  if (tareas.length === 0) {
    tareasVacio.style.display = "block";
  } else {
    tareasVacio.style.display = "none";
    tareas.forEach((tareas, index)=> {
      listaTareas.innerHTML += `<li>${index + 1}. ${tarea}</li>`;
    });
  }
}

//Funcon para agregar tareas//
function agregarTarea() {
    let nuevaTarea = prompt("Agregar tarea");
  
    if (nuevaTarea !== null && nuevaTarea != "") { //Tuve que investigar sobre el null, ya que la consola me tiraba error al ingresar tareas//
      tareas.push(nuevaTarea);
      console.log("Tarea agregada");
      mostrarTareas();
    } else {
      alert("No se ingresaron tareas.");
    }
  }

//Funcion para eliminar tareas//
function eliminarTarea() {
  mostrarTareas();

  let indice = prompt("¿Qué número de tarea querés eliminar?");
  let posicion = parseInt(indice);
  
    if (posicion > 0 && posicion <= tareas.length) {
      let nuevaLista = [];

      for (let i = 0; i < tareas.length; i++) {
        if (i != (posicion - 1)) {
          nuevaLista.push(tareas[i]);
        }
      }
      tareas = nuevaLista;
  
      console.log("Tarea eliminada.");
      mostrarTareas();
    } else {
      alert("Número inválido. Por favor, elegí una tarea que exista.");
    }
  }






