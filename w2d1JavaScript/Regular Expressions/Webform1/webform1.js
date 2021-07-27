window.onload = () => {
  "use strict";
  mainFunc();
};

function mainFunc() {
  "use strict";
  const form = document.getElementById("form");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const url = document.getElementById("url");
  const checkbox = document.getElementById("checkbox");

  const pwdErrMsg = document.getElementById("password-error-msg");
  const urlErrMsg = document.getElementById("url-error-msg");

  /*Regular Expression*/
  const passwordMatch = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/;
  const urlMatch = "^(http|https)://.*$";

  form.addEventListener("submit", checkValidation);

  function checkValidation(e) {
    e.preventDefault();
    let currentPwd = password.value;
    let currentURL = url.value;
    let currentEmail = email.value;

    if (!currentPwd.match(passwordMatch)) {
      pwdErrMsg.classList.remove("password-error-msg");
      return false;
    }
    if (!currentURL.match(urlMatch)) {
      urlErrMsg.classList.remove("url-error-msg");
      return false;
    }

    email.value = "";
    password.value = "";
    url.value = "";
    checkbox.checked = false;
    pwdErrMsg.className = "password-error-msg";
    urlErrMsg.className = "url-error-msg";
    alert(
      `Form Submitted Successfully !! \n  Your credentials: Email:${currentEmail} \n Password: ${currentPwd} \n URL: ${currentURL}`
    );
    return true;
  }
}
