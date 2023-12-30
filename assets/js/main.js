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

/*==================== DROPDOWN MENU ====================*/
const menuItem = document.querySelectorAll(".dropdown-menu-item");
const mainNumber = document.getElementById("main-number");
const dropdownBtn = document.getElementById("dropdown-button");
const menuLi = document.querySelectorAll(".dropdown-menu-item-li");
const dropdownContent = document.getElementById("dropdown-content");
const arrow = document.getElementById("arrow");
let count = 0;

dropdownBtn.addEventListener('click', () => {
  count++;

  if (count % 2 === 0) {
    dropdownContent.classList.toggle("visible-dropdown");

    arrow.classList.remove("rotate-arrow");

    for (let item of menuLi) {
      item.classList.remove("to-left");
    }
  } else {
    dropdownContent.classList.toggle("visible-dropdown");

    arrow.classList.add("rotate-arrow");

    for (let item of menuLi) {
      item.classList.add("to-left");
    }
  }

  for (let item of menuItem) {
    item.classList.remove("active-menu-item");
  }

  for (let item of menuItem) {
    if (item.textContent === mainNumber.textContent) {
      item.classList.add("active-menu-item");
    }
  }
})

for (let item of menuLi) {
  item.addEventListener('click', () => {
    count = 0;

    dropdownContent.classList.remove("visible-dropdown");

    arrow.classList.remove("rotate-arrow");

    for (let item of menuLi) {
      item.classList.remove("to-left");
    }

    mainNumber.textContent = item.textContent;
  })
}
