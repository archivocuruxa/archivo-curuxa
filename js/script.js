document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("busqueda");
    const revistas = document.querySelectorAll(".revista");

    // Crear mensaje de "no hay resultados"
    const mensaje = document.createElement("p");
    mensaje.textContent = "Sin resultados";
    mensaje.classList.add("no-resultados");
    mensaje.style.display = "none";

    const galeria = document.querySelector(".galeria");
    galeria.appendChild(mensaje);

    input.addEventListener("input", () => {
        const texto = input.value.toLowerCase().trim();

        let encontrados = 0;

        revistas.forEach(revista => {
            const numero = (revista.dataset.numero || "").toLowerCase();
            const mes = (revista.dataset.mes || "").toLowerCase();
            const anio = (revista.dataset.anio || "").toLowerCase();

            const titulo = revista.querySelector("h3").textContent.toLowerCase();
            const descripcion = revista.querySelector("p").textContent.toLowerCase();

            const coincide =
                numero.includes(texto) ||
                mes.includes(texto) ||
                anio.includes(texto) ||
                titulo.includes(texto) ||
                descripcion.includes(texto);

            if (coincide) {
                revista.style.display = "";
                encontrados++;
            } else {
                revista.style.display = "none";
            }
        });

        // Mostrar u ocultar mensaje
        mensaje.style.display = encontrados === 0 ? "block" : "none";
    });
});

/* ========================================
   PROGRESO DE LA HEMEROTECA
======================================== */

const totalPublicaciones = 67;

const publicacionesDigitalizadas =
    document.querySelectorAll(".revista").length;

const porcentaje =
    (publicacionesDigitalizadas / totalPublicaciones) * 100;

const porcentajeRedondeado =
    porcentaje.toFixed(1);

document.getElementById("progreso-texto").textContent =
    `${publicacionesDigitalizadas} de ${totalPublicaciones} revistas digitalizadas`;

document.getElementById("progreso-porcentaje").textContent =
    `${porcentajeRedondeado}%`;

setTimeout(() => {

    document.getElementById("progreso-relleno").style.width =
        `${porcentaje}%`;

}, 100);