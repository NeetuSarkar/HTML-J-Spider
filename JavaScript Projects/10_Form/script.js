let username = document.getElementById("username");
let password = document.getElementById("password");
let loginForm = document.getElementById("login-form");
let passwordToggleBtn = document.getElementById("password-toggle");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  usn = username.value;
  pwd = password.value;

  let userObj = {};
  userObj.username = usn;
  userObj.password = pwd;

  console.log(userObj);

  username.value = password.value = "";
});

passwordToggleBtn.addEventListener("click", () => {
  let type = password.getAttribute("type");
  if (type === "password") {
    password.setAttribute("type", "text");
    passwordToggleBtn.classList.remove("fa-eye");
    passwordToggleBtn.classList.add("fa-eye-slash");
  } else {
    password.setAttribute("type", "password");
    passwordToggleBtn.classList.remove("fa-eye-slash");
    passwordToggleBtn.classList.add("fa-eye");
  }
});
