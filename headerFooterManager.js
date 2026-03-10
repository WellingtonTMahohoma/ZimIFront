class SpecialHeader extends HTMLElement
{
 connectedCallback()
  {
   this.innerHTML = 
    `<nav class="navbar">
        <div class="nav-container">
            <div class="nav-left">
                <button class="menu-toggle" id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="logo">
                    <span class="logo-zim">ZIM</span><span class="logo-i">I</span><span class="logo-front">FRONT</span>
                </div>
            </div>
            
            <div class="nav-center">
                <a href="#home" class="nav-link active">HOME</a>
                <a href="project.html" class="nav-link">PROJECTS</a>
                <a href="#about" class="nav-link">OUR ORGANISATION</a>
                <a href="Contact.html" class="nav-link">CONTACT US</a>
            </div>
            
            <div class="nav-right">
                <div class="user-section">
                    <div class="user-icon"></div>
                    <span class="user-text">GUEST MODE</span>
                </div>
                <button class="btn-login">LOGIN</button>
                <button class="btn-signup">SIGN-UP</button>
            </div>
        </div>
    </nav>

    <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-header">WELCOME, GUEST</div>
        <a href="index.html" class="mobile-link">HOME</a>
        <a href="dashboard.html" class="mobile-link">PROJECTS</a>
        <a href="user_profiles.html" class="mobile-link">USER PROFILES</a> 
        <a href="resourcehub.html" class="mobile-link">RESOURCES HUB</a>
        <a href="News and Updates.html" class="mobile-link">NEWS & UPDATES</a>
        <a href="#organisation" class="mobile-link">OUR ORGANISATION</a>
        <a href="Contact.html" class="mobile-link">CONTACT US</a>
        <div class="mobile-auth">
            <button class="btn-login">LOGIN</button>
            <button class="btn-signup">SIGN-UP</button>
     </div>


        <div class="mobile-footer">
            COPYRIGHT © 2026 ZIMBABWE INNOVATION FRONT. ALL RIGHTS RESERVED.
        </div>
    </div>`; 
  }
}


class SpecialFooter extends HTMLElement
{
 connectedCallback()
  {
   this.innerHTML = `<footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="logo">
                    <span class="logo-zim">ZIM</span><span class="logo-i">I</span><span class="logo-front">FRONT</span>
                </div>
                <p>COPYRIGHT © 2026 ZIMBABWE INNOVATION FRONT. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    </footer>`; 
     
  }
}

customElements.define('special-header', SpecialHeader)

customElements.define('special-footer', SpecialFooter)

