document.addEventListener("DOMContentLoaded", function(){

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

function toggleMenu(){

mobileMenu.classList.toggle("active");
menuOverlay.classList.toggle("active");

document.body.style.overflow =
mobileMenu.classList.contains("active") ? "hidden" : "";

}

if(menuToggle){
menuToggle.addEventListener("click", toggleMenu);
}

if(menuOverlay){
menuOverlay.addEventListener("click", toggleMenu);
}


/* close menu when clicking mobile links */

const mobileLinks = document.querySelectorAll(".mobile-link");

mobileLinks.forEach(link=>{
link.addEventListener("click", ()=>{

mobileMenu.classList.remove("active");
menuOverlay.classList.remove("active");
document.body.style.overflow="";

});
});


/* navbar hide on scroll */

let lastScroll = 0;
const navbar = document.querySelector(".navbar");

if(navbar){

window.addEventListener("scroll", ()=>{

const currentScroll = window.scrollY;

if(currentScroll > lastScroll && currentScroll > 100){
navbar.style.transform = "translateY(-100%)";
}
else{
navbar.style.transform = "translateY(0)";
}

lastScroll = currentScroll;

});

navbar.style.transition = "transform 0.3s ease";

}

});