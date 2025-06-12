//Bienvenida//
let nombre = prompt ("¡Hola, vamos a organizar tus tareas! Primero lo primero, ¿Como te llamas?")
const saludo = document.getElementById("saludoNombre");
saludo.innerText = "Hola, " + nombre;

let tareas = [];
//Funcion para mostrar las tareas//
function mostrarTareas() {
  if (tareas.length === 0) {
    console.log("No hay tareas pendientes");
  } else {
    console.log("Lista de tareas:");
    for (let i = 0; i < tareas.length; i++) {
      console.log((i + 1) + ". " + tareas[i]);
    }
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

//Funcion de menù de opciones//
function mostrarMenu() {
    let opcion = "";
  
    for (let i = 0; i < 100; i++) { //no se me ocurrio una forma de que corra infinitas veces, asi que le puse un numero alto//
        let opcion = prompt(
          "¿Qué querés hacer? " + nombre +
          " 1. Ver tareas " + 
          "2. Agregar tareas " + 
          "3. Eliminar una tarea " + 
          "4. Salir"
        );
  
      if (opcion === "1") {
        if (tareas.length === 0) {
        alert("No se han agregado tareas aún");
        } else {mostrarTareas();}
      }else if (opcion === "2") {
        agregarTarea();
      } else if (opcion === "3") {
        eliminarTarea();
      } else if (opcion === "4") {
        console.log("¡Nos vemos!");
        break;
      } else {
        alert("Opción inválida. Elegí un número del 1 al 4.");
      }
    }
  }
mostrarMenu();



