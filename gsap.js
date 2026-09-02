const atras = document.querySelector("#atras");
const adelante = document.querySelector("#adelante");

const agua = document.querySelector(".agua");

const longitud = agua.getTotalLength();

let cantidadAgua = 0;

function actualizarAgua() {

    gsap.to(agua, {
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