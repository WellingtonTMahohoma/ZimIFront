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
                    <span class="user-text" onclick="guestMode()>GUEST MODE</span>
                </div>
               <button class="btn-login" onclick="openLogin()">LOGIN</button>
                <button class="btn-signup" onclick="openSignup()">SIGN-UP</button>

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
<button class="btn-login" onclick="openLogin()">LOGIN</button>
<button class="btn-signup" onclick="openSignup()">SIGN-UP</button>

     </div>


        <div class="mobile-footer">
            COPYRIGHT © 2026 ZIMBABWE INNOVATION FRONT. ALL RIGHTS RESERVED.
        </div>
    </div>
    <!-- LOGIN MODAL -->
<div class="modal" id="loginModal">
<div class="auth-wrapper">
        <div class="auth-card">
            <div class="auth-logo">
                <span style="color:#fff">ZIM</span><span style="color:#00ff41;font-size:2.5rem">I</span><span style="color:#fff">FRONT</span>
            </div>
            <p class="auth-subtitle">ZIMBABWE INNOVATION FRONT</p>

            <h2 class="auth-title">WELCOME BACK</h2>

            <div class="avatar-upload">
                <div class="avatar-preview" id="avatarPreviewLogin">👤</div>
                <p class="avatar-label">
                    Profile picture<br>
                    <span onclick="document.getElementById('avatarInputLogin').click()">Upload photo</span> (optional)
                </p>
                <input type="file" id="avatarInputLogin" accept="image/*">
            </div>

            <div class="form-group">
                <label for="loginName">YOUR NAME</label>
                <input type="text" id="loginName" placeholder="Enter your name" required>
            </div>

            <div class="form-group">
                <label for="loginEmail">EMAIL ADDRESS</label>
                <input type="email" id="loginEmail" placeholder="you@example.com" required>
            </div>

            <div class="form-group">
                <label for="loginPassword">PASSWORD</label>
                <input type="password" id="loginPassword" placeholder="••••••••" required>
            </div>

            <p class="error-msg" id="loginError">Please fill in all fields.</p>

            <button class="btn-auth" onclick="loginUser()">LOGIN →</button>

           <p class="auth-switch">
            Don't have an account? 
            <a href="#" onclick="closeLogin(); openSignup(); return false;">Sign Up here</a>
           </p>
        </div>
    </div>
    </div>

    <div class="modal" id="signupModal">
    <div class="auth-wrapper">
        <div class="auth-card">
            <div class="auth-logo">
                <span style="color:#fff">ZIM</span><span style="color:#00ff41;font-size:2.5rem">I</span><span style="color:#fff">FRONT</span>
            </div>
            <p class="auth-subtitle">ZIMBABWE INNOVATION FRONT</p>

            <h2 class="auth-title">CREATE ACCOUNT</h2>

            <div class="avatar-upload">
                <div class="avatar-preview" id="avatarPreviewSignup">👤</div>
                <p class="avatar-label">
                    Profile picture<br>
                    <span onclick="document.getElementById('avatarInputSignup').click()">Upload photo</span> (optional)
                </p>
                <input type="file" id="avatarInputSignup" accept="image/*">
            </div>

            <div class="form-group">
                <label for="signupName">FULL NAME</label>
                <input type="text" id="signupName" placeholder="Your full name" required>
            </div>

            <div class="form-group">
                <label for="signupEmail">EMAIL ADDRESS</label>
                <input type="email" id="signupEmail" placeholder="you@example.com" required>
            </div>

            <div class="form-group">
                <label for="signupCountry">COUNTRY</label>
                <input type="text" id="signupCountry" placeholder="Zimbabwe">
            </div>

            <div class="form-group">
                <label for="signupPassword">PASSWORD</label>
                <input type="password" id="signupPassword" placeholder="Choose a strong password" required>
            </div>

            <div class="form-group">
                <label for="signupConfirm">CONFIRM PASSWORD</label>
                <input type="password" id="signupConfirm" placeholder="Repeat password" required>
            </div>

            <p class="error-msg" id="signupError">Passwords do not match.</p>

            <button class="btn-auth" onclick="signupUser()">CREATE ACCOUNT →</button>

            <p class="auth-switch">
              Already have an account? 
              <a href="#" onclick="closeSignup(); openLogin(); return false;">Log In here</a>
             </p>
         </div>
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

function openLogin(){
 document.getElementById("loginModal").style.display = "flex";
 document.body.style.overflow = "hidden";
 history.pushState({modal:"login"}, "", "#login");
}

function closeLogin(){
 document.getElementById("loginModal").style.display = "none";
 document.body.style.overflow = "";
}
/*function toggleMenu() {

 const mobileMenu = document.getElementById('mobileMenu');
 const menuOverlay = document.getElementById('menuOverlay');

 mobileMenu.classList.toggle('active');
 menuOverlay.classList.toggle('active');

}*/

function openSignup(){
 document.getElementById("signupModal").style.display = "flex";
 document.body.style.overflow = "hidden";
 history.pushState({modal:"signup"}, "", "#signup");
}

function closeSignup(){
 document.getElementById("signupModal").style.display = "none";
 document.body.style.overflow = "";
}

window.addEventListener("popstate", function(){

 closeLogin();
 closeSignup();

});

function guestMode(){
 alert("You are browsing as a guest.");
}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
        }

        // Also move menuToggle setup here since it's injected by the component

 const menuToggle = document.getElementById('menuToggle');
 const mobileMenu = document.getElementById('mobileMenu');
 const menuOverlay = document.getElementById('menuOverlay');

 if(menuToggle){
  menuToggle.addEventListener('click', toggleMenu);
 }

});

    }, 0);
});

window.addEventListener("DOMContentLoaded", function(){

const signupInput = document.getElementById("avatarInputSignup");
const loginInput = document.getElementById("avatarInputLogin");

if(signupInput){
 signupInput.addEventListener("change", function(){
  const file = this.files[0];
  if(!file) return;

  const reader = new FileReader();
  reader.onload = function(e){
   const preview = document.getElementById("avatarPreviewSignup");
   preview.innerHTML = `<img src="${e.target.result}" alt="avatar">`;
   preview.dataset.src = e.target.result;
  };

  reader.readAsDataURL(file);
 });
}

if(loginInput){
 loginInput.addEventListener("change", function(){
  const file = this.files[0];
  if(!file) return;

  const reader = new FileReader();
  reader.onload = function(e){
   const preview = document.getElementById("avatarPreviewLogin");
   preview.innerHTML = `<img src="${e.target.result}" alt="avatar">`;
   preview.dataset.src = e.target.result;
  };

  reader.readAsDataURL(file);
 });
}

});

        function signupUser() {
            const name     = document.getElementById('signupName').value.trim();
            const email    = document.getElementById('signupEmail').value.trim();
            const country  = document.getElementById('signupCountry').value.trim();
            const password = document.getElementById('signupPassword').value;
            const confirm  = document.getElementById('signupConfirm').value;
            const errorEl  = document.getElementById('signupError');
            const preview  = document.getElementById('avatarPreviewSignup');

            if (!name || !email || !password || !confirm) {
                errorEl.style.display = 'block';
                errorEl.textContent   = 'Please fill in all required fields.';
                return;
            }

            if (password !== confirm) {
                errorEl.style.display = 'block';
                errorEl.textContent   = 'Passwords do not match.';
                return;
            }

            errorEl.style.display = 'none';

            const user = {
                name:    name,
                email:   email,
                country: country,
                image:   preview.dataset.src || ''
            };

            localStorage.setItem('zimfront_user', JSON.stringify(user));
            window.location.href = 'index.html';
        }

        document.addEventListener('keydown', e => {
            if (e.key === 'Enter') signupUser();
        });

window.addEventListener("DOMContentLoaded", function(){

const signupInput = document.getElementById("avatarInputSignup");
const loginInput = document.getElementById("avatarInputLogin");

if(signupInput){
 signupInput.addEventListener("change", function(){
  const file = this.files[0];
  if(!file) return;

  const reader = new FileReader();
  reader.onload = function(e){
   const preview = document.getElementById("avatarPreviewSignup");
   preview.innerHTML = `<img src="${e.target.result}" alt="avatar">`;
   preview.dataset.src = e.target.result;
  };

  reader.readAsDataURL(file);
 });
}

if(loginInput){
 loginInput.addEventListener("change", function(){
  const file = this.files[0];
  if(!file) return;

  const reader = new FileReader();
  reader.onload = function(e){
   const preview = document.getElementById("avatarPreviewLogin");
   preview.innerHTML = `<img src="${e.target.result}" alt="avatar">`;
   preview.dataset.src = e.target.result;
  };

  reader.readAsDataURL(file);
 });
}

});

        function loginUser() {
            const name     = document.getElementById('loginName').value.trim();
            const email    = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            const errorEl  = document.getElementById('loginError');
            const preview  = document.getElementById('avatarPreviewLogin');

            if (!name || !email || !password) {
                errorEl.style.display = 'block';
                errorEl.textContent   = 'Please fill in all fields.';
                return;
            }

            errorEl.style.display = 'none';

            const user = {
                name:  name,
                email: email,
                image: preview.dataset.src || ''
            };

            localStorage.setItem('zimfront_user', JSON.stringify(user));
            window.location.href = 'index.html';
        }

        // Allow pressing Enter to submit
        document.addEventListener('keydown', e => {
            if (e.key === 'Enter') loginUser();
        });

/*window.onclick = function(event) {

 if(event.target.id === "loginModal"){
  closeLogin();
 }

 if(event.target.id === "signupModal"){
  closeSignup();
 }

}*/


/*window.addEventListener("DOMContentLoaded", function(){

 const hash = window.location.hash;

 if(hash === "#login"){
  openLogin();
 }

 if(hash === "#signup"){
  openSignup();
 }

});*/


