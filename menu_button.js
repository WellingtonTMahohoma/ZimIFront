function initMenu() {
    const menuToggle  = document.getElementById('menuToggle');
    const mobileMenu  = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const navbar      = document.querySelector('.navbar');

    if (!menuToggle || !mobileMenu || !menuOverlay) return false;
    if (menuToggle.dataset.bound) return true;
    menuToggle.dataset.bound = 'true';

    function toggleMenu() {
        const isOpen = mobileMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = isOpen ? 'hidden' : '';

        const spans = menuToggle.querySelectorAll('span');
        if (isOpen) {
            spans[0].style.transform = 'rotate(45deg) translateY(9px)';
            spans[1].style.opacity   = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-9px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity   = '1';
            spans[2].style.transform = 'none';
        }
    }

    menuToggle.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity   = '1';
            spans[2].style.transform = 'none';
        });
    });

    if (navbar) {
        navbar.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            navbar.style.transform = (currentScroll > lastScroll && currentScroll > 100)
                ? 'translateY(-100%)'
                : 'translateY(0)';
            navbar.style.backgroundColor = currentScroll > 50
                ? 'rgba(0,0,0,0.98)'
                : 'rgba(0,0,0,0.95)';
            lastScroll = currentScroll;
        });
    }

    return true;
}

// Keep trying until the custom element has rendered
function waitForMenu() {
    if (initMenu()) return;
    const observer = new MutationObserver(() => {
        if (initMenu()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

document.addEventListener('DOMContentLoaded', waitForMenu);
