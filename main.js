// hamburger menu funcionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const mobileMenu = function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}  
hamburger.addEventListener("click", mobileMenu);

const removeMenu = function() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
navMenu.addEventListener("click", removeMenu);
document.querySelector(".nav-menu").addEventListener("click", removeMenu);

//carousel functionality

document.querySelector(".btn").scrollLeft