const burger = document.querySelector(".burger");
const burgerNav = document.querySelector(".burger-nav");
const nav = document.querySelector("nav");
const forBlur = document.querySelector(".for-blur");

burger.addEventListener("click", ()=> {
    burger.classList.toggle("toggle");
    burgerNav.classList.toggle("display-nav");
    forBlur.classList.toggle("display-block");
})