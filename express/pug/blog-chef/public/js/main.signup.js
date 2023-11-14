window.onload = function () {
  const formSel = document.querySelector("form[name='signUpForm']");
  const nameInput = document.querySelector("input[name='name']");
  const emailInput = document.querySelector("input[name='email']");
  const passwordInput = document.querySelector("input[name='password']");

  formSel.addEventListener("submit", (e) => {
    if (
      nameInput.value !== "" &&
      emailInput.value !== "" &&
      passwordInput.value !== ""
    ) {
      return true;
    } else {
      alert("Please fill in your name, email ID and password!");
      e.preventDefault();
      return false;
    }
  });
};
