// hamburger menu funcionality
const createHamburgerMenue = function() {
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
}

// scroll functinality
const doScroll = function() {
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
}

// carousel functionality
const carousel = function () {
  const carousel = document.querySelector(".carousel"),
  card = document.querySelector(".card"),
  next = document.querySelector(".next"),
  prev = document.querySelector(".prev");

  let width = card.offsetWidth + 8;
  next.addEventListener("click", () => {
    
    let totalScrollWidth = carousel.offsetWidth < 415 ? width*4 : width*2;
    
    console.log(carousel.scrollLeft);
    console.log(totalScrollWidth);

    carousel.scrollBy(width , 0); 
    if (carousel.scrollWidth !== 0) {
      prev.style.display = "flex";
    }
    if (carousel.scrollLeft === totalScrollWidth) {
      next.style.display = "none";
    }
  });  
  prev.addEventListener("click", () => {
    carousel.scrollBy(-width, 0);
    if (carousel.scrollLeft === width) {
      prev.style.display = "none";
    }
    if (carousel.scrollLeft > 0) {
      next.style.display = "flex";
    }
  });
}

doScroll();
createHamburgerMenue();
carousel();
