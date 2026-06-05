const ninjagoLink = document.getElementById("ninjago");
const ninjagoImg = document.getElementById("e");
const boy = document.querySelector(".boyimg");
const hollowimg = document.getElementById("a");
const hollowlink = document.getElementById("hollow");
ninjagoLink.addEventListener("mouseenter", () => {
    ninjagoImg.style.opacity = "1";
    boy.style.opacity = "0";
});
ninjagoLink.addEventListener("mouseleave", () => {
    ninjagoImg.style.opacity = "0";
    boy.style.opacity = "1";
});
hollowlink.addEventListener("mouseenter", ()=> {
    hollowimg.style.opacity = "1";
    boy.style.opacity = "0";
});
hollowlink.addEventListener("mouseleave", () =>{
    hollowimg.style.opacity = "0";
    boy.style.opacity = "1";
});
