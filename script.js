const ninjagoLink = document.getElementById("ninjago");
const ninjagoImg = document.getElementById("e");
const boy = document.querySelector(".boyimg");

ninjagoLink.addEventListener("mouseenter", () => {
    ninjagoImg.style.opacity = "1";
    boy.style.opacity = "0";
});
ninjagoLink.addEventListener("mouseleave", () => {
    ninjagoImg.style.opacity = "0";
    boy.style.opacity = "1";
});