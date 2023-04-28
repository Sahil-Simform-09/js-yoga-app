// hamburger menu funcionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const mobileMenu = function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}  
hamburger.addEventListener("click", mobileMenu);

hamburger.classList.remove("active");
navMenu.classList.remove("active");
navMenu.addEventListener("click", removeMenu);
document.querySelector(".nav-menu").addEventListener("click", removeMenu);

// scroll functinality
const links = document.querySelectorAll("a");
links.forEach( link => {
link.addEventListener("click", event => {

    //get target div
    let targetId = link.getAttribute("href");
    let targetDiv = document.querySelector(targetId);

    //apply scroll functionality
    targetDiv.scrollIntoView({
      behavior: "smooth",
    });

    history.pushState(null , null, targetId);
    event.preventDefault();
  });
});

// carousel functionality
const carousel = document.querySelector(".carousel"),
  card = document.querySelector(".card"),
  next = document.querySelector(".next"),
  prev = document.querySelector(".prev");

let width = card.offsetWidth + 12;

next.addEventListener("click", e => {
  carousel.scrollBy(width , 0); 
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (carousel.scrollLeft === width*2) {
    next.style.display = "none";
  }
});  
prev.addEventListener("click", e => {
    arousel.scrollBy(-width, 0);
  if (carousel.scrollLeft === width) {
    prev.style.display = "none";
  }
  if (carousel.scrollLeft > 0) {
    next.style.display = "flex";
  }
});