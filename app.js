//Revision si hay nombres guardados en el local storage//
let nombre = localStorage.getItem("nombreUsuario");

if (!nombre) {
 Swal.fire({
    title: "¡Hola, Bienvenid@ a Study Flow!",
    text: "Vamos a organizar tus tareas💡 ¿Cómo te llamás?",
    input: "text",
    inputPlaceholder: "Escribí tu nombre...",
    allowOutsideClick: false,
    allowEscapeKey: false,
    confirmButtonText: "Comenzar",
    confirmButtonColor: '#8a96ba',
    inputValidator: (value) => {
      if (!value || value.trim() === "") {
        return "Por favor, ingresá un nombre válido.";
      }
    }
  }).then((result) => {
    nombre = result.value.trim();
    localStorage.setItem("nombreUsuario", nombre);

    // Bienvenida//
    const saludo = document.getElementById("saludoNombre");
    saludo.innerText = "Hola, " + nombre;
  });
} else {
  //Bienvenida si ya estaba guardado el nombre//
  const saludo = document.getElementById("saludoNombre");
  saludo.innerText = "Hola, " + nombre;
}

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
    }  else {
    Swal.fire({
      icon: 'warning',
      title: '¡Ups, parece que hubo un error!',
      text: 'Por favor, agrega una tarea a la lista',
      confirmButtonColor: '#8a96ba'
    });
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


//Timer//
let tiempo = 1500;
let tiempoInicial = 1500;
let intervalo = null;

const display = document.getElementById("timerDisplay");
const btnIni = document.getElementById("btnIniciar");
const btnPaus = document.getElementById("btnPausar");
const btnReset = document.getElementById("btnResetear");

// Fetch del archivo JSON para cargar la duración//
fetch("timer.json")
  .then(response => response.json())
  .then(data => {
    tiempo = data.duracion;
    tiempoInicial = data.duracion;
    renderizarTiempo(); 
  })
   .catch(error => {
    Swal.fire({
      icon: 'error',
      title: 'Error al cargar el timer',
      text: 'Vuelve a intentarlo mas tarde.',
      confirmButtonColor: '#8a96ba'
    });
  });

// Mostrar Timer//
function renderizarTiempo() {
  const minutos = Math.floor(tiempo / 60);
  const segundos = tiempo % 60;
  display.innerText = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
}

// Iniciar timer //
function iniciarTimer() {
  if (intervalo === null && tiempo > 0) {
    intervalo = setInterval(() => {
      tiempo--;
      renderizarTiempo();

      if (tiempo === 0) {
        clearInterval(intervalo);
        intervalo = null;
        Swal.fire({
          icon: 'success',
          title: '¡El tiempo ha terminado!',
          text: '¡Buen trabajo, sigue así!',
          confirmButtonColor: '#8a96ba'
        });
      }
    }, 1000);
  }
}

// Pausar timer//
function pausarTimer() {
  clearInterval(intervalo);
  intervalo = null;
}

// Resetear timer//
function resetearTimer() {
  pausarTimer();
  tiempo = tiempoInicial;
  renderizarTiempo();
}

// Eventos//
btnIni.addEventListener("click", iniciarTimer);
btnPaus.addEventListener("click", pausarTimer);
btnReset.addEventListener("click", resetearTimer);
