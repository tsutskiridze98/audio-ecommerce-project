const burger = document.querySelector(".burger");
const burgerNav = document.querySelector(".burger-nav");
const nav = document.querySelector("nav");
const forBlur = document.querySelector(".for-blur");
const body = document.querySelector("body");

// cart btn
const cartBtn = document.querySelector(".cart-btn");
const cartDiv = document.querySelector(".cart");

burger.addEventListener("click", ()=> {
    burger.classList.toggle("toggle");
    burgerNav.classList.toggle("display-nav");
    forBlur.classList.toggle("display-block");
})

cartBtn.addEventListener("click", ()=> {
    cartDiv.classList.add("display-cart");
    forBlur.classList.add("display-block");
    forBlur.style.zIndex = "105";
    body.classList.add("overflow");
})

forBlur.addEventListener("click", ()=> {
    cartDiv.classList.remove("display-cart");
    forBlur.classList.remove("display-block");
    forBlur.style.zIndex = "50";
    body.classList.remove("overflow");
})