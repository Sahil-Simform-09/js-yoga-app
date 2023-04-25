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

// carousel funcionality
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

