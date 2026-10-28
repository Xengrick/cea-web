// ============================================================
//  Datos: una entrada por escena. Posiciones y tamaños en "cqw"
//  (1 cqw = 1% del ancho del escenario). Todo es opcional
//  menos "globo" y "texto".
// ============================================================
const ESCENAS = [
  // ---- 1: la presa ----
  {
    fondo: "img/_1ntro.png",
    audio: "audio/rutadelagua/escenario_uno.mp3",
    fondoPosY: 75,
    personaje: {
      src: "img/nina_casco.png",
      alt: "Niña con casco",
      x: 37.2,
      y: 9.6,
      ancho: 25,
    },
    globo: { x: 59, y: 4.8, ancho: 22.5 },
    texto:
      "El agua se obtiene del Río Colorado y acuíferos a través de diversas obras " +
      'hidráulicas, como las <span class="enlace" data-def="presa" tabindex="0">presas</span> y los pozos subterráneos. ' +
      'En Baja California tenemos cinco <span class="enlace" data-emerge="presas" tabindex="0">presas de gran importancia</span>.',
    definiciones: {
      presa: {
        titulo: "Presa",
        texto:
          "Es una construcción para captar y almacenar agua para riego de zonas agrícolas, " +
          "producción de energía eléctrica, control de inundaciones o para abastecimiento " +
          "de agua a la población.",
      },
    },
    tarjeta: { x: 15.9, y: 40.5, ancho: 32.6, fuente: 1.3, fondo: "rgba(214, 234, 243, .75)" },
    // Círculos con las 5 presas (una sola imagen con todos los círculos) y su nombre debajo
    emergentes: {
      presas: {
        src: "img/_1.png",
        x: 7.5, y: -2.15, ancho: 71, alto: 53.3,
        pies: [
          { html: "El Carrizo",           leyenda: true, fuente: 1.4, x: 26.6, y: 14.5, ancho: 20, alto: 3 },
          { html: "Las Auras",            leyenda: true, fuente: 1.4, x: 12.8, y: 19.6, ancho: 20, alto: 3 },
          { html: "Emilio López Zamora",  leyenda: true, fuente: 1.4, x: 5.95, y: 33.1, ancho: 20, alto: 3 },
          { html: "Morelos",              leyenda: true, fuente: 1.4, x: 60.7, y: 32.6, ancho: 20, alto: 3 },
          { html: "Abelardo L. Rodríguez", leyenda: true, fuente: 1.4, x: 49.7, y: 43.4, ancho: 20, alto: 3 },
        ],
      },
    },
    letrero: {
      texto:
        "Andador de inspección de la cortina de la presa Abelardo L. Rodríguez",
      x: 76,
      y: 23.1,
      ancho: 22,
      alto: 13,
      fuente: 1.5,
      poste: { x: 86, y: 19.6, ancho: 1.9, alto: 40 },
    },
  },

  // ---- 2: el canal ----
  {
    fondo: "img/_2.jpg",
    audio: "audio/rutadelagua/escenario_dos.mp3",
    fondoPosY: 39,
    imagen: {
      src: "img/_2d.png",
      alt: "",
      x: 31.3,
      y: -0.5,
      ancho: 24.5,
      pie: "Canal del Distrito de Riego 014",
      pieY: 23.9,
    },
    personaje: {
      src: "img/nino_fondo.png",
      alt: "Niño con botas",
      x: 3.4,
      y: 10.2,
      ancho: 28.7,
    },
    globo: {
      x: 25.2,
      y: 28.4,
      ancho: 28.2,
      alto: 15.8,
      fuente: 1.6,
      cola: "arriba",
    },

    // Texto del GLOBO (con las palabras que abren tarjeta)
    texto:
      "Una vez que se extrae, el agua es llevada por cientos de kilómetros a través de " +
      '<span class="enlace" data-def="canal" tabindex="0">canales</span> y ' +
      '<span class="enlace" data-def="acueducto" tabindex="0">acueductos</span>, ' +
      "para acercarla a las casas.",

    definiciones: {
      canal: {
        titulo: "Canal",
        texto:
          "Es una construcción que puede ser natural o artificial destinada al transporte " +
          "de todo tipo de fluidos, en este caso, agua.",
      },
      acueducto: {
        titulo: "Acueducto",
        texto:
          "Es un conducto cilíndrico de diferentes diámetros que permite conducir de manera " +
          "segura diversos caudales de agua entre sitios distantes unos de otros. Existen dos " +
          "formas de conducir agua por un acueducto: por gravedad, en donde no requieres " +
          "energía para mover el agua; y por presión, donde se requiere de energía para mover " +
          "el agua a través de diferentes altitudes.",
      },
    },
    tarjeta: { x: 58.2, y: 36, ancho: 27 },

    // Texto del LETRERO (solo texto simple)
    letrero: {
      texto: "Alimentación de los pozos de la Mesa Arenosa",
      x: 20.6,
      y: 1.6,
      ancho: 15.6,
      alto: 9.1,
      fuente: 1.35,
      poste: { x: 27.85, y: -1, ancho: 1.1, alto: 33 },
    },
  },

  // ---- 3: el acueducto ----
  {
    fondo: "img/_3.jpg",
    audio: "audio/rutadelagua/escenario_tres.mp3",
    fondoPosY: 52,
    logo: "izquierda",
    personaje: {
      src: "img/nina_tres.png",
      alt: "Niña explicando",
      y: 1.9,
      ancho: 31.4,
      pegado: "derecha",
    },
    globo: {
      x: 48.4,
      y: 1.3,
      ancho: 28.9,
      alto: 14,
      fuente: 1.55,
      cola: "derecha",
    },

    texto:
      "Por cierto, ¿sabías que el Acueducto Río Colorado-Tijuana es una de las mayores " +
      '<span class="enlace" data-emerge tabindex="0">obras de infraestructura</span> en el país? ' +
      "Gracias a él, el agua llega a la Zona Costa del Estado.",

    emergente: {
      src: "img/_3a.png",
      x: 9.35,
      y: -0.25,
      ancho: 37.6,
      pies: [
        {
          html: "Estructura para limpieza interna del Acueducto Río Colorado Tijuana a la salida de la Planta de Bombeo 0",
          x: 28.6,
          y: 20.3,
          ancho: 32.8,
          alto: 5.2,
          izq: 11.8,
        },
        {
          html: "Planta de Bombeo 3 del Acueducto Río Colorado Tijuana",
          x: 23.2,
          y: 45.9,
          ancho: 25.6,
          alto: 4.2,
          izq: 9.4,
        },
      ],
    },
    letrero: {
      texto: "Acueducto Río Colorado-Tijuana",
      x: 3,
      y: 26.4,
      ancho: 22.2,
      alto: 14,
      fuente: 2.4,
      poste: { x: 13.15, y: 22.8, ancho: 1.8, alto: 30 },
    },
  },

  // ---- 4: planta potabilizadora ----
  {
    fondo: "img/_4.jpg",
    audio: "audio/rutadelagua/escenario_cuatro.mp3",
    fondoPosY: 50,
    logo: "izquierda",
    personaje: {
      src: "img/nina_cuatro.png",
      alt: "Niña con los brazos abiertos",
      x: 39,
      y: 9.5,
      ancho: 27,
    },
    globo: { x: 61.6, y: 1.1, ancho: 27, alto: 17, fuente: 1.3 },
    texto:
  "Una vez que el agua se extrae de la fuente de abastecimiento y es llevada " +
  "hasta tu casa, debemos asegurarnos que tenga la calidad necesaria para que " +
  "puedas usarla, así que hay que verificar que no contenga " +
  '<span class="enlace" data-emerge="patogeno">patógenos</span> ni agentes químicos que dañen tu ' +
  "salud. Para ello es necesario purificarla a través de las " +
  '<span class="enlace" data-emerge="plantas">plantas potabilizadoras</span>.',
    letrero: {
      texto: "Planta Potabilizadora Mexicali I",
      x: 6.1,
      y: 28,
      ancho: 22,
      alto: 14,
      fuente: 2.3,
      poste: { x: 16.2, y: 25.5, ancho: 1.9, alto: 38 },
    },
    emergentes: {
      patogeno: {
        src: "img/patogenoOver.png",
        x: 12.1, y: 6.8, ancho: 27.9,
      },
      plantas: {
        src: "img/_4b.png",                    // Emilio López Zamora
        x: 15.6, y: 0.7, ancho: 26.9,
        extras: [
          { src: "img/_4a.png", x: 63.9, y: 18.9, ancho: 24.9 },   // El Florido
        ],
        pies: [
          { html: "Potabilizadora<br>Emilio López Zamora", leyenda: true, x: 19.1, y: 25, ancho: 20, alto: 4.5 },
          { html: "Potabilizadora<br>El Florido", leyenda: true, x: 66.5, y: 44, ancho: 20, alto: 4.5 },
        ],
      },
    },
  },

    // ---- 5: dentro de la planta ----
    {
      fondo: "img/_5.jpg",
      audio: "audio/rutadelagua/escenario_cinco.mp3",
      fondoPosY: 60,
      personaje: {
        src: "img/nina_cinco.png",
        alt: "Niña ingeniera con casco",
        x: 68.4,
        y: 8.3,
        ancho: 33.5,
      },
      globo: { x: 35, y: 0, ancho: 37.4, alto: 15, fuente: 1.9, cola: "derecha" },
      texto:
        "En las plantas de potabilización hay equipo y personal altamente " +
        "capacitado para asegurar que el agua se purifique por completo y quede " +
        "con la mejor calidad, para que la puedas usar sin riesgo de enfermarte.",
      letrero: {
        texto: "Planta Potabilizadora Mexicali I",
        x: 6.1,
        y: 28,
        ancho: 22,
        alto: 14,
        fuente: 2.3,
        poste: { x: 16.2, y: 30, ancho: 1.9, alto: 36 },
      },
    },

      // ---- 6: el medidor ----
  {
    fondo: "img/_6.jpg",
    audio: "audio/rutadelagua/escenario_seis.mp3",
    fondoPosY: 50,
    personaje: {
      src: "img/nina_seis.png",
      alt: "Niña con casco señalando",
      x: 69.8,
      y: 11.8,
      ancho: 27.5,
    },
    globo: { x: 41.5, y: 32.5, ancho: 36.5, alto: 11, fuente: 1.8, cola: "arriba-derecha" },
    texto:
      "¡Ahora sí!, ya que tiene la calidad necesaria, al agua se distribuye " +
      "por tuberías que llegan a tu casa.",
  },

    // ---- 7: la cocina ----
    {
      fondo: "img/_7.jpg",
      audio: "audio/rutadelagua/escenario_siete.mp3",
      fondoPosY: 12,
      globo: { x: 25, y: 29.4, ancho: 36, fuente: 1.5, cola: "derecha" },
      texto: "Y listo: ¡puedes usar agua sin riesgo!",
    },

      // ---- 8: planta de tratamiento de aguas residuales ----
  {
    fondo: "img/_8.jpg",
    audio: "audio/rutadelagua/escenario_ocho.mp3",
    fondoPosY: 50,
    logo: "izquierda",
    personaje: {
      src: "img/nina_ocho.png",
      alt: "Niña con la mano extendida",
      y: 12,
      ancho: 24,
      pegado: "derecha",
    },
    globo: { x: 53.8, y: 1.3, ancho: 24, alto: 21.5, fuente: 1.15, cola: "derecha" },
    texto:
      "Pero espera: la ruta del agua no termina aquí.<br><br>" +
      "Una vez que nos duchamos y aseamos la casa, contaminamos el agua, por lo que " +
      "debemos bajar ese nivel de contaminación para no dañar al medio ambiente.<br><br>" +
      "Es en esta parte donde entran en acción las " +
      '<span class="enlace" data-def="ptar" data-emerge="ptar">plantas de tratamiento de aguas residuales</span>, ' +
      "donde se limpia el líquido para su aprovechamiento.",
    letrero: {
      texto: "Planta de tratamiento de aguas residuales Ing. José Arturo Herrera Solís",
      x: 53.4,
      y: 32,
      ancho: 21.3,
      alto: 14,
      fuente: 1.75,
      poste: { x: 63.4, y: 30, ancho: 1.8, alto: 36 },
    },
    definiciones: {
      ptar: {
        titulo: "Plantas de tratamiento de aguas residuales",
        texto:
          "Es aquel lugar que permite captar aguas residuales, y a través de un " +
          "tratamiento químico-biológico, se descontamina para poder devolverla " +
          "al medio ambiente sin riesgo alguno.",
      },
    },
    tarjeta: { x: 18.3, y: 36.2, ancho: 27 },
    emergentes: {
      ptar: {
        src: "img/_8d.png",
        x: 17.7,
        y: 0.6,
        ancho: 28,
      },
    },
  },
    // ---- 9: reúso del agua ----
    {
      audio: "audio/rutadelagua/escenario_nueve.mp3",
      logo: "izquierda",
      extras: [
        { src: "img/perro_nina.png", alt: "Niña bañando a su perro", x: 54.3, y: 18.3, ancho: 22 },
        { src: "img/papa_nino.png",  alt: "Papá y niño con cubeta",   x: 77,   y: 18.7, ancho: 20.9 },
      ],
      globo: { x: 5, y: 10.3, ancho: 48.5, fuente: 1.9, plano: true },
      texto:
        "Una vez que se ha limpiado de acuerdo con lo establecido en la normatividad, " +
        'se puede reutilizar en <span class="enlace" data-def="riego">riego</span>, jardinería, industria o bien, ' +
        "para la recarga de acuíferos.<br><br>" +
        "Ahora sí, termina la ruta del agua; y ahora que la conoces, ¿te interesa cuidar " +
        "el medio ambiente para asegurar que esta ruta se conserve siempre?<br><br>" +
        "Para que no se acabe el agua, debemos " +
        '<span class="enlace" data-def="aprovechar">aprovecharla responsablemente</span> para cada uso que le damos.',
        definiciones: {
          riego: {
            titulo: "Fuentes de agua para riego",
            texto:
              "Además de las plantas de tratamiento residuales, el agua para el uso agrícola, " +
              "o también llamado uso de riego, se puede obtener también de las mismas fuentes " +
              "subterráneas (acuíferos) y superficiales (ríos, lagos y lagunas) de donde se " +
              "obtiene el agua potable para uso doméstico. Y una fuente de abastecimiento más " +
              "del agua para uso de riego está en el agua de la lluvia, la cual debe ser " +
              "recogida cada vez que llueve.",
          },
        },
        tarjetas: {
          riego:      { x: 58,   y: 29.5, ancho: 39.6, fuente: 1.7, fondo: "rgba(214, 234, 243, .8)" },
          aprovechar: { x: 61.9, y: 29.5, ancho: 36,   fuente: 1.5, fondo: "rgba(214, 234, 243, .85)" },
        },
    },
];

// ============================================================
//  Elementos de la página
// ============================================================
const portada = document.getElementById("portada");
const escena = document.getElementById("escena");
const fondoPagina = document.getElementById("fondo-pagina");
const escenario = document.querySelector(".escenario");
const imagen = document.getElementById("escena-imagen");
const pie = document.getElementById("escena-pie");

const personaje = document.getElementById("escena-personaje");
const globo = document.getElementById("escena-globo");
const texto = document.getElementById("escena-texto");

const letrero = document.getElementById("escena-letrero");
const letreroPanel = document.getElementById("letrero-panel");
const letreroPoste = document.getElementById("letrero-poste");
const letreroTxt = document.getElementById("escena-letrero-texto");

const btnAnt = document.getElementById("btn-ant");
const btnSig = document.getElementById("btn-sig");

const tarjeta = document.getElementById("escena-tarjeta");
const tarjetaTitulo = document.getElementById("escena-tarjeta-titulo");
const tarjetaTexto = document.getElementById("escena-tarjeta-texto");

const logo = document.querySelector(".logo-portada");

const emergente = document.getElementById("escena-emergente");

// -1 = portada, 0..(ESCENAS.length - 1) = escenas
let actual = -1;

// ============================================================
//  Pintar una escena
//  Cada función se encarga de un elemento y lee su parte de ESCENAS.
// ============================================================

// Coloca un elemento con medidas en cqw (las que no vengan, no se tocan)
function colocar(el, x, y, ancho, alto) {
  el.style.left = x + "cqw";
  el.style.top = y + "cqw";
  el.style.width = ancho + "cqw";
  el.style.height = alto !== undefined ? alto + "cqw" : "";
}

// Fondo: ocupa toda la ventana, detrás del escenario
function pintarFondo(d) {
  fondoPagina.hidden = !d.fondo;
  escenario.classList.toggle("con-fondo", !!d.fondo);
  if (d.fondo) {
    fondoPagina.src = d.fondo;
    fondoPagina.style.objectPosition = "50% " + (d.fondoPosY ?? 50) + "%";
  }
}

// Letrero con poste
function pintarLetrero(d) {
  letrero.hidden = !d.letrero;
  if (!d.letrero) return;

  const l = d.letrero;
  letreroTxt.textContent = l.texto;
  letreroTxt.style.fontSize = (l.fuente || 1.5) + "cqw";
  colocar(letreroPanel, l.x, l.y, l.ancho, l.alto);
  colocar(letreroPoste, l.poste.x, l.poste.y, l.poste.ancho, l.poste.alto);
}

// Círculo con foto y su pie de foto
function pintarImagen(d) {
  imagen.hidden = !d.imagen;
  pie.hidden = !(d.imagen && d.imagen.pie);
  if (!d.imagen) return;

  imagen.src = d.imagen.src;
  imagen.alt = d.imagen.alt || "";
  imagen.style.left = d.imagen.x + "cqw";
  imagen.style.top = d.imagen.y + "cqw";
  imagen.style.width = d.imagen.ancho + "cqw";
  if (d.imagen.pie) {
    pie.textContent = d.imagen.pie;
    pie.style.left = d.imagen.x + "cqw";
    pie.style.top = d.imagen.pieY + "cqw";
    pie.style.width = d.imagen.ancho + "cqw";
  }
}

function pintarPersonaje(d) {
  personaje.hidden = !d.personaje;
  if (!d.personaje) return;

  personaje.src = d.personaje.src;
  personaje.alt = d.personaje.alt || "";
  personaje.style.top = d.personaje.y + "cqw";
  personaje.style.width = d.personaje.ancho + "cqw";
  if (d.personaje.pegado === "derecha") {
    personaje.style.left = "auto";
    personaje.style.right = "calc(50cqw - 50vw)";
  } else {
    personaje.style.left = d.personaje.x + "cqw";
    personaje.style.right = "";
  }
}

// Globo de diálogo (la colita va abajo, o hacia donde se pida en "cola")
function pintarGlobo(d) {
  const g = d.globo;
  globo.className = "globo" + (g.cola ? " cola-" + g.cola : "") + (g.plano ? " plano" : "");
  globo.style.left = g.x + "cqw";
  globo.style.top = g.y + "cqw";
  globo.style.width = g.ancho + "cqw";
  globo.style.minHeight = g.alto ? g.alto + "cqw" : "";
  globo.style.fontSize = (g.fuente || 1.4) + "cqw";
  texto.innerHTML = d.texto;
}

// Imágenes emergentes: un grupo por palabra (clave = valor de data-emerge)
function pintarEmergentes(d) {
  emergente.innerHTML = "";
  const grupos = d.emergentes
    ? Object.entries(d.emergentes)
    : d.emergente ? [["", d.emergente]] : [];

  for (const [clave, e] of grupos) {
    const grupo = document.createElement("div");
    grupo.className = "emergente-grupo";
    grupo.dataset.grupo = clave;

    // Primero las leyendas, para que las fotos queden encima
    for (const p of e.pies || []) {
      const caja = document.createElement("div");
      caja.className = "emergente-pie" + (p.leyenda ? " leyenda" : "");
      caja.innerHTML = p.html;
      caja.style.left = p.x + "cqw";
      caja.style.top = p.y + "cqw";
      caja.style.width = p.ancho + "cqw";
      caja.style.minHeight = p.alto + "cqw";
      caja.style.paddingLeft = p.izq !== undefined ? p.izq + "cqw" : "";
      if (p.fuente !== undefined) caja.style.fontSize = p.fuente + "cqw";
      grupo.appendChild(caja);
    }

    // La imagen principal y las extras
    for (const im of [e, ...(e.extras || [])]) {
      const img = document.createElement("img");
      img.src = im.src;
      img.alt = "";
      img.style.left = im.x + "cqw";
      img.style.top = im.y + "cqw";
      img.style.width = im.ancho + "cqw";
      if (im.alto !== undefined) img.style.height = im.alto + "cqw";   // opcional: si no, conserva la proporción
      grupo.appendChild(img);
    }
    emergente.appendChild(grupo);
  }
}

// Imágenes sueltas (extras)
function pintarExtras(d) {
  escena.querySelectorAll(".escena-extra").forEach((n) => n.remove());
  for (const x of d.extras || []) {
    const img = document.createElement("img");
    img.className = "escena-extra";
    img.src = x.src;
    img.alt = x.alt || "";
    img.style.left = x.x + "cqw";
    img.style.top = x.y + "cqw";
    img.style.width = x.ancho + "cqw";
    escena.appendChild(img);
  }
}

function mostrarEscena(d) {
  pintarFondo(d);
  pintarLetrero(d);
  pintarImagen(d);
  pintarPersonaje(d);
  pintarGlobo(d);
  pintarEmergentes(d);
  pintarExtras(d);
}

// ============================================================
//  Narración: un solo reproductor para la portada y las escenas
// ============================================================
const RUTA_INTRO = "audio/rutadelagua/introduccion.mp3";
const narracion = new Audio();

function narrar(ruta) {
  narracion.pause();
  if (!ruta) return;                 // escena sin audio: queda en silencio
  narracion.src = ruta;
  narracion.currentTime = 0;
  narracion.play().catch((err) => {
    // Si el navegador bloqueó el audio automático, arranca con el primer clic o tecla
    if (err.name !== "NotAllowedError") return;
    const arrancar = () => {
      if (narracion.src.endsWith(ruta)) narracion.play().catch(() => {});
    };
    document.addEventListener("pointerdown", arrancar, { once: true });
    document.addEventListener("keydown", arrancar, { once: true });
  });
}

// ============================================================
//  Navegación entre la portada y las escenas
// ============================================================
function ir(indice) {
  actual = Math.max(-1, Math.min(ESCENAS.length - 1, indice));
  ocultarTarjeta();
  const enPortada = actual === -1;
  narrar(enPortada ? RUTA_INTRO : ESCENAS[actual].audio);
  logo.classList.toggle(
    "logo-izq",
    !enPortada && ESCENAS[actual].logo === "izquierda"
  );

  portada.classList.toggle("oculta", !enPortada);
  escena.classList.toggle("oculta", enPortada);
  btnAnt.hidden = enPortada;
  btnSig.disabled = actual === ESCENAS.length - 1;

  if (enPortada) {
    fondoPagina.hidden = true;
    escenario.classList.remove("con-fondo");
  } else {
    mostrarEscena(ESCENAS[actual]);
  }
}

btnSig.addEventListener("click", () => ir(actual + 1));
btnAnt.addEventListener("click", () => ir(actual - 1));

// Flechas del teclado
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") ir(actual + 1);
  if (e.key === "ArrowLeft") ir(actual - 1);
});

// ============================================================
//  Palabras resaltadas del globo: abren una tarjeta de definición
//  (data-def) y/o una imagen emergente (data-emerge).
//  Funcionan con el cursor y con el teclado (foco).
// ============================================================
function mostrarTarjeta(clave) {
  const d = ESCENAS[actual];
  const def = d && d.definiciones && d.definiciones[clave];
  // Posición propia de la palabra (d.tarjetas[clave]) o la general de la escena (d.tarjeta)
  const pos = (d && d.tarjetas && d.tarjetas[clave]) || (d && d.tarjeta);

  if (!def || !pos) return;

  tarjetaTitulo.textContent = def.titulo;
  tarjetaTexto.innerHTML = def.texto;
  tarjeta.style.left = pos.x + "cqw";
  tarjeta.style.top = pos.y + "cqw";
  tarjeta.style.width = pos.ancho + "cqw";
  tarjeta.style.fontSize = pos.fuente ? pos.fuente + "cqw" : "";
  tarjeta.style.background = pos.fondo || "";
  tarjeta.classList.add("visible");
}

function ocultarTarjeta() {
  tarjeta.classList.remove("visible");
}

// Grupo de imágenes emergentes que corresponde a la palabra del evento
function grupoDe(e) {
  const palabra = e.target.closest("[data-emerge]");
  return palabra
    ? emergente.querySelector('[data-grupo="' + palabra.dataset.emerge + '"]')
    : null;
}

function alEntrarEnPalabra(e) {
  const conDef = e.target.closest("[data-def]");
  if (conDef) mostrarTarjeta(conDef.dataset.def);

  const grupo = grupoDe(e);
  if (grupo) grupo.classList.add("visible");
}

function alSalirDePalabra(e) {
  if (e.target.closest("[data-def]")) ocultarTarjeta();

  const grupo = grupoDe(e);
  if (grupo) grupo.classList.remove("visible");
}

globo.addEventListener("mouseover", alEntrarEnPalabra);
globo.addEventListener("focusin", alEntrarEnPalabra);
globo.addEventListener("mouseout", alSalirDePalabra);
globo.addEventListener("focusout", alSalirDePalabra);

ir(-1);