// ============================================================
//  Audio de los personajes de la casa.
//  Suena mientras el cursor esté encima; si sale antes de que
//  termine, se corta y vuelve al inicio.
// ============================================================
const AUDIOS = {
  "personaje-papa": "audio/index/papa.mp3",
  "personaje-mama": "audio/index/mama.mp3",
  "personaje-nino": "audio/index/nino.mp3",
  "personaje-nina": "audio/index/nina.mp3",
};

for (const [id, ruta] of Object.entries(AUDIOS)) {
  const personaje = document.getElementById(id);
  if (!personaje) continue;

  const audio = new Audio(ruta);
  audio.preload = "auto";

  personaje.addEventListener("pointerenter", () => {
    // play() devuelve una promesa que falla si el navegador bloquea el audio
    audio.play().catch(() => {});
  });

  personaje.addEventListener("pointerleave", () => {
    audio.pause();
    audio.currentTime = 0;   // la próxima vez empieza desde el principio
  });
}

// ============================================================
//  Música de fondo con botón
// ============================================================
const musica = new Audio("audio/index/fondo.mp3");
musica.loop = true;
musica.volume = 0.4;   // más bajita para que se escuchen los personajes

const btnMusica = document.getElementById("btn-musica");

function marcarMusica(sonando) {
  btnMusica.setAttribute("aria-pressed", sonando);
  btnMusica.setAttribute("aria-label", sonando ? "Silenciar música de fondo" : "Activar música de fondo");
}

btnMusica.addEventListener("click", () => {
  if (musica.paused) {
    musica.play().then(() => marcarMusica(true)).catch(() => marcarMusica(false));
  } else {
    musica.pause();
    marcarMusica(false);
  }
});
