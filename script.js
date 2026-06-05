const wizardsimg = document.getElementById("d");
const wizardslink = document.getElementById("wizards");
const ninjagoLink = document.getElementById("ninjago");
const ninjagoImg = document.getElementById("e");
const boy = document.querySelector(".boyimg");
const hollowimg = document.getElementById("a");
const hollowlink = document.getElementById("hollow");
const carmenimg = document.getElementById("c");
const carmenlink = document.getElementById("carmen");
const trollhunterimg = document.getElementById("b");
const trollhunterlink = document.getElementById("trollhunter");
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
carmenlink.addEventListener("mouseenter" , ()=> {
    carmenimg.style.opacity = "1";
    boy.style.opacity = "0";
});
carmenlink.addEventListener("mouseleave", ()=>{
    carmenimg.style.opacity = "0";
    boy.style.opacity = "1";
})
trollhunterlink.addEventListener("mouseenter", ()=>{
    boy.style.opacity = "0";
    trollhunterimg.style.opacity = "1";
});
trollhunterlink.addEventListener("mouseleave",()=>{
    trollhunterimg.style.opacity = "0";
    boy.style.opacity = "1";
});
wizardslink.addEventListener("mouseenter", ()=>{
    wizardsimg.style.opacity = "1";
    boy.style.opacity = "0";
});
wizardslink.addEventListener("mouseleave", ()=>{
    wizardsimg.style.opacity = "0";
    boy.style.opacity = "1";
});