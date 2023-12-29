/*==================== SHOW PASSWORD ====================*/
const passwordInput = document.getElementById("password-input");
const eyeOn = document.getElementById("eye-on");
const eyeOff = document.getElementById("eye-off");
const icons = document.querySelectorAll(".form-icon");

function showPassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        showPassword();
        eyeOn.classList.toggle("eye-off");
        eyeOff.classList.toggle("eye-off");
    });
})

/*==================== ACTIVE LINK ====================*/
const navbarItems = document.querySelectorAll(".navbar-item");

function activeLink (link) {
  for (let i = 1; i < navbarItems.length - 1; i++) {
    navbarItems[i].classList.remove("active-link");
  }
  link.classList.add("active-link");
}

for (let i = 1; i < navbarItems.length - 1; i++) {
  navbarItems[i].addEventListener("click", () => activeLink(navbarItems[i]));
}

/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navOpen = document.getElementById('nav-open'),
      navClose = document.getElementById('nav-close'),
      backgroundShadow = document.getElementById('background-shadow'),
      header = document.getElementById('header');

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navOpen.classList.toggle('icon-off');
    navClose.classList.toggle('icon-on');
    header.classList.toggle('menu-on');
    backgroundShadow.classList.toggle('disable-background-shadow');
    document.querySelector('html').classList.toggle('no-scroll');
  });

  backgroundShadow.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navOpen.classList.toggle('icon-off');
    navClose.classList.toggle('icon-on');
    header.classList.toggle('menu-on');
    backgroundShadow.classList.toggle('disable-background-shadow');
    document.querySelector('html').classList.toggle('no-scroll');
  })
}
