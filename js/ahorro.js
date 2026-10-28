// ============================================================
//  Datos del juego: una sola fuente de verdad.
//  Agregar, quitar o corregir una acción es editar este arreglo,
//  no tocar la lógica de abajo.
// ============================================================
const ACCIONES = [
  { id: "fuga",     litros: 900, imagen: "img/accion_fuga.png", exito: "¡Todos te lo agradecemos! Ayudaste a ahorrar {litros} litros al mes.", texto: "Reporta a las autoridades fugas y desperdicios de agua en la calle." },
  { id: "cubeta",   litros: 180, imagen: "img/accion_cubeta.png", exito: "Tu gran compromiso con el ambiente se premia con {litros} litros al mes.", texto: "Coloca una cubeta mientras sale el agua caliente de la regadera y reutilízala para limpiar o regar el jardín." },
  { id: "trastes",  litros: 300, imagen: "img/accion_trastes.png", exito: "Eres un gran apoyo para papá y mamá en el hogar… ¡y no desperdiciaste {litros} litros en un mes!", texto: "Al lavar los trastes remójalos todos una sola vez y enjuágalos rápidamente." },
  { id: "mascota",  litros: 300, imagen: "img/accion_mascota.png", exito: "No sólo cuidas muy bien a tu mascota, también ayudaste a salvar {litros} litros al mes.", texto: "Utiliza una cubeta con agua, en lugar de una manguera o regadera, para bañar a tu mascota." },
  { id: "lluvia",   litros: 2400, imagen: "img/accion_lluvia.png", exito: "Ya eres parte del ciclo del agua, ¡muy bien! Además, ahorraste {litros} litros.", texto: "Recoge el agua de lluvia en cubetas para usarla en la limpieza de la casa o el WC." },
  { id: "verduras", litros: 90, imagen: "img/accion_verduras.png", exito: "Eres muy inteligente, además de preparar una rica comida ahorraste {litros} litros en un mes.", texto: "Lava las verduras en un recipiente y desinféctalas. Reusa el agua en el WC o para regar el jardín." },
  { id: "ducha",    litros: 4500, imagen: "img/accion_ducha.png", exito: "Pero qué limpio eres.<br>Tienes buena presentación<br>¡y {litros} litros ahorrados al mes!", texto: "No excedas más de 3 minutos al bañarte." },
  { id: "cepillo",  litros: 520, imagen: "img/accion_dientes.png", exito: "¡Excelente! Ahora tienes dientes limpios y ahorraste {litros} litros en un mes.", texto: "Cierra la llave mientras te cepillas los dientes, lavas las manos y rasuras." },
  { id: "basura",   litros: 450, imagen: "img/accion_basura.png", exito: "Muy bien hecho, ya no se van a tapar los drenajes y vas a ahorrar {litros} litros al mes.", texto: "No utilices el inodoro como basurero, evita hacer descargas innecesarias." },
  { id: "auto",     litros: 2000, imagen: "img/accion_auto.png", exito: "Listo el auto para un lindo paseo familiar sin gastar agua: ahorraron ¡{litros} litros en un mes!", texto: "No laves el coche con manguera, usa una cubeta." },
];

// Una partida termina cuando se usan todos los intentos: uno por acción.
const MAX_INTENTOS = ACCIONES.length;

// Rangos de litros ahorrados para la pantalla final (si no son 10/10 aciertos).
const LITROS_EXCELENTE = 6000;     // de 6001 litros en adelante
const LITROS_INTERMEDIO = 2500;    // de 2501 a 6000 litros; de 0 a 2500 es "insatisfactoria"

// Mensajes que se muestran al fallar.
const MENSAJES_FALLO = [
  "No te desanimes, de tu esfuerzo depende que tengamos agua. ¡Sigue!",
  "Hay mucho por aprender y sé que lo harás mejor en la siguiente. ¡Vamos!",
  "Esta imagen no va aquí, pero estoy seguro que en la vida real lo haces bien. ¡Ánimo!",
];

// Todo lo que cambia durante la partida vive en un solo lugar.
const estado = {
  litros: 0,
  intentos: 0,
  aciertos: 0,
};

// ============================================================
//  Construir el tablero (una tarjeta por acción, con su círculo destino)
// ============================================================
const tablero = document.getElementById("tablero");

ACCIONES.forEach((accion) => {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta-meta";
  tarjeta.innerHTML = `
    <div class="circulo-destino" data-id="${accion.id}"></div>
    <p>${accion.texto}</p>
  `;
  tablero.appendChild(tarjeta);
});

// ============================================================
//  Construir la bandeja de fichas arrastrables (orden mezclado,
//  para que no queden alineadas con su tarjeta correspondiente)
// ============================================================
const bandeja = document.getElementById("bandeja");

function mezclar(arreglo) {
  const copia = [...arreglo];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

mezclar(ACCIONES).forEach((accion) => {
  const ficha = document.createElement("div");
  ficha.className = "ficha con-imagen";
  ficha.dataset.id = accion.id;
  ficha.innerHTML = '<img src="' + accion.imagen + '" alt="" draggable="false">';
  ficha.addEventListener("pointerdown", iniciarArrastre);
  bandeja.appendChild(ficha);
});

// ============================================================
//  Arrastre con Pointer Events (funciona igual con mouse y con dedo)
// ============================================================
function iniciarArrastre(evento) {
  const ficha = evento.currentTarget;
  if (ficha.classList.contains("colocada") || estado.intentos >= MAX_INTENTOS) return;

  ficha.setPointerCapture(evento.pointerId);

  const rect = ficha.getBoundingClientRect();
  const offsetX = evento.clientX - rect.left;
  const offsetY = evento.clientY - rect.top;

  ficha.classList.add("arrastrando");
  ficha.style.left = rect.left + "px";
  ficha.style.top = rect.top + "px";

  function mover(evento) {
    ficha.style.left = evento.clientX - offsetX + "px";
    ficha.style.top = evento.clientY - offsetY + "px";
    marcarCirculoBajoPuntero(evento.clientX, evento.clientY);
  }

  function soltar(evento) {
    ficha.removeEventListener("pointermove", mover);
    ficha.removeEventListener("pointerup", soltar);
    ficha.classList.remove("arrastrando");
    limpiarCirculosMarcados();
    evaluarSoltura(ficha, evento.clientX, evento.clientY);
  }

  ficha.addEventListener("pointermove", mover);
  ficha.addEventListener("pointerup", soltar);
}

// Devuelve el círculo destino que está en el punto (x, y), si hay alguno.
function circuloEn(x, y) {
  return document
    .elementsFromPoint(x, y)
    .find((el) => el.classList && el.classList.contains("circulo-destino"));
}

// Resalta el círculo que está bajo el dedo/cursor mientras se arrastra,
// para que el usuario sepa dónde va a caer.
function marcarCirculoBajoPuntero(x, y) {
  limpiarCirculosMarcados();
  const destino = circuloEn(x, y);
  if (destino) destino.classList.add("sobre-arrastre");
}

function limpiarCirculosMarcados() {
  document
    .querySelectorAll(".circulo-destino.sobre-arrastre")
    .forEach((el) => el.classList.remove("sobre-arrastre"));
}

// ============================================================
//  Decidir si acertó o falló al soltar
// ============================================================
function evaluarSoltura(ficha, x, y) {
  const destino = circuloEn(x, y);

  estado.intentos++;
  actualizarMarcadores();

  let mostroExito = false;

  if (destino && destino.dataset.id === ficha.dataset.id) {
    registrarAcierto(ficha, destino);
    mostroExito = mostrarMensajeExito(ficha.dataset.id);
  } else {
    registrarFallo(ficha);
    // En el último intento no se muestra, porque sale la pantalla final.
    if (estado.intentos < MAX_INTENTOS) mostrarMensajeFallo();
  }

  // Si salió el mensaje de éxito, la pantalla final espera a que se cierre
  if (estado.intentos >= MAX_INTENTOS && !mostroExito) {
    setTimeout(mostrarPantallaFinal, 500);
  }
}

function registrarAcierto(ficha, destino) {
  const accion = ACCIONES.find((a) => a.id === ficha.dataset.id);
  estado.aciertos++;
  estado.litros += accion.litros;
  actualizarMarcadores();

  // La ficha se queda fija dentro de su círculo, ya no se puede volver a mover.
  ficha.classList.add("colocada");
  ficha.style.position = "static";
  ficha.style.transform = "none";
  destino.classList.add("acertado");
  destino.appendChild(ficha);
}

function registrarFallo(ficha) {
  // Regresa a la bandeja: se quitan las coordenadas fijas
  // y el flujo normal del contenedor la vuelve a acomodar.
  ficha.style.position = "";
  ficha.style.left = "";
  ficha.style.top = "";
  bandeja.appendChild(ficha);

  ficha.classList.add("fallo");
  ficha.addEventListener("animationend", () => ficha.classList.remove("fallo"), { once: true });
}

// ============================================================
//  Mensaje de fallo
// ============================================================
const mensajeFallo = document.getElementById("mensaje-fallo");
const mensajeTexto = document.getElementById("mensaje-texto");
let ultimoMensaje = -1;

function mostrarMensajeFallo() {
  // Elige un mensaje al azar, evitando repetir el anterior
  let indice;
  do {
    indice = Math.floor(Math.random() * MENSAJES_FALLO.length);
  } while (indice === ultimoMensaje && MENSAJES_FALLO.length > 1);
  ultimoMensaje = indice;

  mensajeTexto.textContent = MENSAJES_FALLO[indice];
  mensajeFallo.classList.remove("oculta");
}

function cerrarMensajeFallo() {
  mensajeFallo.classList.add("oculta");
}

document.getElementById("mensaje-cerrar").addEventListener("click", cerrarMensajeFallo);

// También se cierra al hacer clic fuera del cuadro
mensajeFallo.addEventListener("click", (e) => {
  if (e.target === mensajeFallo) cerrarMensajeFallo();
});

// ============================================================
//  Mensaje de éxito (se muestra al acertar una acción que tenga "exito")
// ============================================================
const mensajeExito = document.getElementById("mensaje-exito");

function mostrarMensajeExito(id) {
  const accion = ACCIONES.find((a) => a.id === id);
  if (!accion || !accion.exito) return false;

  document.getElementById("exito-imagen").src = accion.imagen;
  document.getElementById("exito-texto").innerHTML =
    accion.exito.replace("{litros}", '<span class="destacado">' + accion.litros + "</span>");
  mensajeExito.classList.remove("oculta");
  return true;
}

function cerrarMensajeExito() {
  if (mensajeExito.classList.contains("oculta")) return;
  mensajeExito.classList.add("oculta");
  // Si fue el último intento, ahora sí sale la pantalla final
  if (estado.intentos >= MAX_INTENTOS) mostrarPantallaFinal();
}

document.getElementById("exito-cerrar").addEventListener("click", cerrarMensajeExito);
mensajeExito.addEventListener("click", (e) => {
  if (e.target === mensajeExito) cerrarMensajeExito();
});

// Escape cierra cualquiera de los dos mensajes
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    cerrarMensajeFallo();
    cerrarMensajeExito();
  }
});

// ============================================================
//  Marcador
// ============================================================
const marcadorLitros = document.getElementById("marcador-litros");
const marcadorIntentos = document.getElementById("marcador-intentos");

function actualizarMarcadores() {
  marcadorLitros.textContent = estado.litros + " lts.";
  marcadorIntentos.textContent = estado.intentos + "/" + MAX_INTENTOS;
}

// ============================================================
//  Pantalla final: 4 resultados posibles
//  (cada uno es un bloque del HTML con ids "pantalla-<nombre>" y "<nombre>-aciertos")
// ============================================================
function mostrarResultado(nombre) {
  document.getElementById(nombre + "-aciertos").textContent = estado.aciertos + "/" + MAX_INTENTOS;
  document.getElementById("pantalla-" + nombre).classList.remove("oculta");
}

function mostrarPantallaFinal() {
  if (estado.aciertos === MAX_INTENTOS) {
    // La calificación perfecta además muestra el total de litros
    document.getElementById("perfecta-litros").textContent = estado.litros.toLocaleString("en-US") + " lts";
    mostrarResultado("perfecta");
  } else if (estado.litros > LITROS_EXCELENTE) {
    mostrarResultado("excelente");
  } else if (estado.litros > LITROS_INTERMEDIO) {
    mostrarResultado("intermedia");
  } else {
    mostrarResultado("insatisfactoria");
  }
}

// Todos los botones de "intentar de nuevo" reinician la partida
document.querySelectorAll(".perfecta-reiniciar").forEach((boton) => {
  boton.addEventListener("click", () => location.reload());
});

// ============================================================
//  Laurel del trofeo (pantalla perfecta): hojas a lo largo de una curva,
//  de abajo hacia arriba. Se dibuja el lado izquierdo; el derecho es su reflejo (en el HTML).
// ============================================================
function dibujarLaurel() {
  const g = document.getElementById("laurel-hojas");
  for (let i = 0; i < 10; i++) {
    const t = i / 9;
    const x = 55 + Math.sin(t * Math.PI) * 38 - t * 10;
    const y = 345 - t * 270;
    for (const lado of [-1, 1]) {
      const hoja = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
      hoja.setAttribute("cx", x + lado * 12);
      hoja.setAttribute("cy", y);
      hoja.setAttribute("rx", 7);
      hoja.setAttribute("ry", 17);
      hoja.setAttribute("transform", "rotate(" + (lado * 28 + t * 20) + " " + (x + lado * 12) + " " + y + ")");
      g.appendChild(hoja);
    }
  }
}

// ============================================================
//  Arranque
// ============================================================
dibujarLaurel();
actualizarMarcadores();
