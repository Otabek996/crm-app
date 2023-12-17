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
