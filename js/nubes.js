// ============================================================
//  Nubes que rebotan entre dos paredes invisibles.
//  Todas comparten la dirección: la primera que toca una pared
//  la invierte para todas. Cada una tiene su propia velocidad
//  (atributo data-vel en el HTML, en unidades del SVG por segundo).
// ============================================================

// Paredes invisibles (coordenadas del SVG, la casa va de ~93 a ~837).
// Se miden contra el borde de cada nube, no contra su centro.
const PARED_IZQ = 100;
const PARED_DER = 940;
const reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const factor = reducir ? 0.25 : 1;

const nubes = [...document.querySelectorAll(".nube-anim")].map((el) => {
  const caja = el.getBBox();   // tamaño real de la nube (y del texto, si lo lleva)
  return {
    vel: Number(el.dataset.vel),
    x: 0,                                   // desplazamiento actual
    min: PARED_IZQ - caja.x,                // hasta dónde puede ir a la izquierda
    max: PARED_DER - (caja.x + caja.width), // hasta dónde puede ir a la derecha
    mover: gsap.quickSetter(el, "x", "px"),
  };
});

// dir va de 1 (derecha) a -1 (izquierda); al invertir se anima
// con ease para que el rebote no sea un cambio brusco.
const estado = { dir: 1 };
let dirObjetivo = 1;

function invertir() {
  dirObjetivo = -dirObjetivo;
  gsap.to(estado, { dir: dirObjetivo, duration: 0.9, ease: "power2.inOut", overwrite: true });
}

gsap.ticker.add((_tiempo, deltaMs) => {
  const seg = Math.min(deltaMs, 100) / 1000;   // evita saltos si la pestaña se congela

  for (const n of nubes) {
    n.x += estado.dir * n.vel * seg * factor;

    if (n.x >= n.max) {
      n.x = n.max;
      if (dirObjetivo > 0) invertir();   // la primera en llegar provoca el rebote
    } else if (n.x <= n.min) {
      n.x = n.min;
      if (dirObjetivo < 0) invertir();
    }

    n.mover(n.x);
  }
});
