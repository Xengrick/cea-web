// ============================================================
//  La tele de la sala: cambia de color y abre el video
// ============================================================

// ---- La pantalla cambia de color cada segundo ----
const coloresTele = ["#FFFFFF", "#B6F500", "#8E44AD", "#33CCFF", "#FF7EB6"]; // blanco, lima, morado, celeste, rosa
const pantallaTele = document.getElementById("pantalla-color");
let colorTele = 0;

setInterval(() => {
  colorTele = (colorTele + 1) % coloresTele.length;
  pantallaTele.style.fill = coloresTele[colorTele];
}, 1000);

// ---- Mini reproductor de YouTube ----
const VIDEO_ID = "vQsF2psYqJ0";
const visor = document.getElementById("visor");
const visorVideo = document.getElementById("visor-video");
const visorCerrar = document.getElementById("visor-cerrar");
const tele = document.getElementById("tele");

function abrirVisor() {
  // El iframe se crea al abrir: así el video empieza solo y no carga antes de tiempo
  visorVideo.innerHTML =
    '<iframe src="https://www.youtube-nocookie.com/embed/' + VIDEO_ID +
    '?autoplay=1&rel=0" title="Importancia del agua" ' +
    'allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>';
  visor.classList.remove("oculta");
  visorCerrar.focus();
}

function cerrarVisor() {
  visor.classList.add("oculta");
  visorVideo.innerHTML = "";   // quitar el iframe detiene el video y el audio
  tele.focus();
}

tele.addEventListener("click", abrirVisor);
tele.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); abrirVisor(); }
});

visorCerrar.addEventListener("click", cerrarVisor);
visor.addEventListener("click", (e) => { if (e.target === visor) cerrarVisor(); });   // clic fuera del video
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !visor.classList.contains("oculta")) cerrarVisor();
});
