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
let url = window.location.href.split("#")[1];

function activeLink (link) {
  for (let i = 0; i < navbarItems.length - 2; i++) {
    navbarItems[i].classList.remove("active-link");
  }
  link.classList.add("active-link");
  url = window.location.href;
}

if (url != undefined) {
  for (let i = 0; i < navbarItems.length - 2; i++) {
    if (url === navbarItems[i].id) {
      navbarItems[i].classList.add("active-link");
    }
  }
}

for (let i = 0; i < navbarItems.length - 2; i++) {
  navbarItems[i].addEventListener("click", () => activeLink(navbarItems[i]));
}
