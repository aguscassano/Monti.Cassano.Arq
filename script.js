const elemento1 = document.getElementById("parallax");
let target = 0;
let current = 0;
const velocidad = 0.1; // entre 0 y 1, cuanto más chico más suave

window.addEventListener("scroll", () => {
  target = window.scrollY * 0.1;
});

function animar() {
    current += (target - current) * velocidad; // interpolación
    elemento1.style.transform = `translateY(${current}px)`;
    requestAnimationFrame(animar);
}

animar();