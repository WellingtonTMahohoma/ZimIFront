document.addEventListener("DOMContentLoaded", function () {

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');

if(menuToggle){

function toggleMenu() {

    mobileMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');

    document.body.style.overflow =
        mobileMenu.classList.contains('active') ? 'hidden' : '';

    const spans = menuToggle.querySelectorAll('span');

    if (mobileMenu.classList.contains('active')) {

        spans[0].style.transform = 'rotate(45deg) translateY(9px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-9px)';

    } else {

        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';

    }

}

menuToggle.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

}

/* Close mobile menu when clicking links */

const mobileLinks = document.querySelectorAll('.mobile-link');

mobileLinks.forEach(link => {

    link.addEventListener('click', () => {

        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';

    });

});


/* Navbar scroll effect */

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

if(navbar){

window.addEventListener('scroll', () => {

    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 100) {

        navbar.style.transform = 'translateY(-100%)';

    } else {

        navbar.style.transform = 'translateY(0)';

    }

    if (currentScroll > 50) {

        navbar.style.backgroundColor = 'rgba(0,0,0,0.98)';

    } else {

        navbar.style.backgroundColor = 'rgba(0,0,0,0.95)';

    }

    lastScroll = currentScroll;

});

navbar.style.transition =
    'transform 0.3s ease, background-color 0.3s ease';

}

});