const atras = document.querySelector("#atras");
const adelante = document.querySelector("#adelante");

const agua = document.querySelector(".agua");
const aguaMascara = document.querySelector(".agua-mascara");

const longitud = agua.getTotalLength();

//Boton Navegación
const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
let menuAbierto = false;

//Opciones Navegación
const opcionTuberia = document.querySelector("#opcion-tuberia");
const opcionArrastrar = document.querySelector("#opcion-arrastrar");

const tuberia = document.querySelector("#tuberia");
const arrastrar = document.querySelector("#arrastrar");

//Objeto de la sección "Arrastrar y soltar"
const objeto = document.querySelector("#objeto");
const destino = document.querySelector("#destino");
const reiniciar = document.querySelector("#reiniciar"); //Botón reiniciar

const triangulo = document.querySelector("#triangulo");
const destinoTriangulo = document.querySelector("#destino-triangulo");

let posicionInicialX = 0;
let posicionInicialY = 0;

let posicionOriginalX = 0;
let posicionOriginalY = 0;

let trianguloArrastrando = false;
let trianguloColocado = false;

let trianguloInicialX = 0;
let trianguloInicialY = 0;

let arrastrando = false;
let objetoColocado = false;

const objetoRectInicial = objeto.getBoundingClientRect();

posicionOriginalX = objetoRectInicial.left;
posicionOriginalY = objetoRectInicial.top;

let cantidadAgua = 0;

function actualizarAgua() {

    gsap.to([agua, aguaMascara], {
        strokeDashoffset: longitud - cantidadAgua,
        duration: 0.5,
        ease: "power1.out"
    });

}

adelante.addEventListener("click", () => {

    cantidadAgua += 100;

    if (cantidadAgua > longitud) {
        cantidadAgua = longitud;
    }

    actualizarAgua();

});

atras.addEventListener("click", () => {

    cantidadAgua -= 100;

    if (cantidadAgua < 0) {
        cantidadAgua = 0;
    }

    actualizarAgua();

});

gsap.to(".flujo", {
    strokeDashoffset: -25,
    duration: 1,
    repeat: -1,
    ease: "none"
});

menuBtn.addEventListener("click", () => {

    if (menuAbierto === false) {

        gsap.to(menu, {
            x: 0,
            duration: 0.4,
            ease: "power2.out"
        });

        menuAbierto = true;

    } else {

        gsap.to(menu, {
            x: "-100%",
            duration: 0.4,
            ease: "power2.out"
        });

        menuAbierto = false;
    }

});

opcionTuberia.addEventListener("click", () => {

    tuberia.style.display = "flex";
    arrastrar.style.display = "none";

});

opcionArrastrar.addEventListener("click", () => {

    tuberia.style.display = "none";
    arrastrar.style.display = "flex";

});

//Reiniciar
reiniciar.addEventListener("click", () => {

    objeto.style.position = "static";
    objeto.style.left = "";
    objeto.style.top = "";

    destino.classList.remove("correcto");
    objetoColocado = false;

    // Reiniciar triángulo
    triangulo.style.position = "static";
    triangulo.style.left = "";
    triangulo.style.top = "";

    trianguloColocado = false;

});

//Mover objeto (arrastrar y soltarlo)
objeto.addEventListener("mousedown", () => {

    if (objetoColocado === true) {
        return;
    }

    const objetoRect = objeto.getBoundingClientRect();

    posicionInicialX = objetoRect.left;
    posicionInicialY = objetoRect.top;

    arrastrando = true;
});

triangulo.addEventListener("mousedown", () => {

    if (trianguloColocado === true) {
        return;
    }

    const trianguloRect = triangulo.getBoundingClientRect();

    trianguloInicialX = trianguloRect.left;
    trianguloInicialY = trianguloRect.top;

    trianguloArrastrando = true;

});

document.addEventListener("mouseup", () => {

    if (arrastrando === true) {

        const objetoRect = objeto.getBoundingClientRect();
        const destinoRect = destino.getBoundingClientRect();

        const dentro =
            objetoRect.left >= destinoRect.left &&
            objetoRect.right <= destinoRect.right &&
            objetoRect.top >= destinoRect.top &&
            objetoRect.bottom <= destinoRect.bottom;

            if (dentro) {

                destino.classList.add("correcto");
                objetoColocado = true;
            
                const destinoRect = destino.getBoundingClientRect();
            
                const x = destinoRect.left + (destinoRect.width / 2) - (objeto.offsetWidth / 2);
                const y = destinoRect.top + (destinoRect.height / 2) - (objeto.offsetHeight / 2);
            
                console.log("Destino:", destinoRect);
                console.log("Objeto:", objeto.getBoundingClientRect());
                console.log("X calculada:", x);
                console.log("Y calculada:", y);

gsap.to(objeto, {
    left: x,
    top: y,
    duration: 0.4,
    ease: "power2.out",

    onComplete: () => {
        console.log("Objeto FINAL:", objeto.getBoundingClientRect());
        console.log("Destino FINAL:", destino.getBoundingClientRect());
    }
});
            
                console.log("¡Objeto colocado!");
            } else {

                gsap.to(objeto, {
                    left: posicionInicialX,
                    top: posicionInicialY,
                    duration: 0.4,
                    ease: "power2.out"
                });
            
            }
    }

    arrastrando = false;
});

document.addEventListener("mouseup", () => {

    if (trianguloArrastrando === true) {

        const trianguloRect = triangulo.getBoundingClientRect();
        const destinoTrianguloRect = destinoTriangulo.getBoundingClientRect();

        const dentroTriangulo =
            trianguloRect.left >= destinoTrianguloRect.left &&
            trianguloRect.right <= destinoTrianguloRect.right &&
            trianguloRect.top >= destinoTrianguloRect.top &&
            trianguloRect.bottom <= destinoTrianguloRect.bottom;

            if (dentroTriangulo) {

                trianguloColocado = true;

                const destinoTrianguloRect = destinoTriangulo.getBoundingClientRect();
                const trianguloRect = triangulo.getBoundingClientRect();
            
                const x =
                    destinoTrianguloRect.left +
                    (destinoTrianguloRect.width / 2) -
                    (trianguloRect.width / 2);
            
                const y =
                    destinoTrianguloRect.top +
                    (destinoTrianguloRect.height / 2) -
                    (trianguloRect.height / 2);
            
                gsap.to(triangulo, {
                    left: x,
                    top: y,
                    duration: 0.4,
                    ease: "power2.out"
                });
            
            }else {

            gsap.to(triangulo, {
                left: trianguloInicialX,
                top: trianguloInicialY,
                duration: 0.4,
                ease: "power2.out"
            });
        
        }
    }

    trianguloArrastrando = false;

});

document.addEventListener("mousemove", (e) => {

    if (arrastrando === true) {

        objeto.style.position = "fixed";

        objeto.style.left = e.clientX - 40 + "px";
        objeto.style.top = e.clientY - 40 + "px";
    }

    if (trianguloArrastrando === true) {

        triangulo.style.position = "fixed";

        triangulo.style.left = e.clientX - 40 + "px";
        triangulo.style.top = e.clientY - 40 + "px";
    }

});
