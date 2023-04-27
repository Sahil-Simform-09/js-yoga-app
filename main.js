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
const carousel = document.querySelector(".carousel"),
  content = document.querySelector(".content"),
  card = document.querySelector(".card"),
  next = document.querySelector(".next"),
  prev = document.querySelector(".prev");

let width = card.offsetWidth;

next.addEventListener("click", e => {
    carousel.scrollBy(card.offsetWidth + 12, 0);
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(card.offsetWidth + 12), 0);
});

//scroll functinality
const links = document.querySelectorAll("a");
links.forEach( link => {
  link.addEventListener("click", event => {

      //get target div
      let targetId = link.getAttribute("href");
      let targetDiv = document.querySelector(targetId);

      //apply scroll functionality
      targetDiv.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      history.pushState({name: "sahil"}, null, targetId);
      event.preventDefault();
  });
});