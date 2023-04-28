const urlPageTitle = "JS Single Page Application Router";

// create document click that watches the nav links only
const header = document.querySelector(".header");
header.addEventListener("click", (event) => {
    let targetElement;
    if(event.target.id === "logo") {
        targetElement = event.target.closest(".nav-logo");
    } else {
        targetElement = event.target;
    }
    console.log("hello", targetElement);
	event.preventDefault();
	urlRoute(event, targetElement);
});

// create an object that maps the url to the template, title, and description
const urlRoutes = {
	404: {
		template: "/templates/404.html",
		title: "404 | " + urlPageTitle,
	},
	"/": {
		template: "/templates/index.html",
		title: "Home | " + urlPageTitle,
	},
	"/about": {
		template: "/templates/about.html",
		title: "About Us | " + urlPageTitle,
	},
	"/service": {
		template: "/templates/service.html",
		title: "Contact Us | " + urlPageTitle,
	},
    "/images": {
		template: "/templates/images.html",
		title: "Contact Us | " + urlPageTitle,
	},
};

// create a function that watches the url and calls the urlLocationHandler
const urlRoute = (event ,target) => {
	event.preventDefault();

	// window.history.pushState(state, unused, target link);
	window.history.pushState({}, "", target.href);
	urlLocationHandler();
};

// carousel functionality
const carousel = function () {

    const carousel = document.querySelector(".content .carousel"),
    card = document.querySelector(".card"),
    next = document.querySelector(".next"),
    prev = document.querySelector(".prev");
        
    console.log();

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
createHamburgerMenue();

// create a function that handles the url location
const urlLocationHandler = async () => {
	const location = window.location.pathname; // get the url path
	// if the path length is 0, set it to primary page route

	if (location.length == 0) {
		location = "/";
	}

	// get the route object from the urlRoutes object
	const route = urlRoutes[location] || urlRoutes["404"];

	// get the html from the template
	const html = await fetch(route.template).then((response) => response.text());

	// set the content of the content div to the html
	document.querySelector(".content").innerHTML = html;
	// set the title of the document to the title of the route
	document.title = route.title;

    if(location === "/images") {
        carousel();
    }
};
