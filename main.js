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
// Select the carousel you'll need to manipulate and the buttons you'll add events to

const carousel = document.querySelector(".carousel"),
  content = document.querySelector(".content"),
  card = document.querySelector(".card"),
  next = document.querySelector(".next"),
  prev = document.querySelector(".prev");

let width = card.offsetWidth;

next.addEventListener("click", e => {
    carousel.scrollBy(card.offsetWidth + 20, 0);
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(card.offsetWidth + 20), 0);
});