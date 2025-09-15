const elemento1 = document.getElementById("parallax");

window.addEventListener("scroll", () => {
    let posicion = window.scrollY || document.documentElement.scrollTop;
    requestAnimationFrame(() => {
    elemento1.style.transform = `translateY(${posicion * 0.1}px)`;
    });
});
