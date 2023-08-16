// Write your code here...
const formEl = document.querySelector("form");
const emailFld = document.querySelector("input[name='email']");
const passwordFld = document.querySelector("input[name='password']");
const repasswordFld = document.querySelector("input[name='repassword']");
const fullnameFld = document.querySelector("input[name='fullname']");
const merchantFld = document.querySelector("input[name='merchant']");
const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

let canSubmit = true;

const submitForm = (data) => {
  console.log(data);
  //formEl.submit();
};

const validateFld = (el, condition) => {
  if (condition) {
    canSubmit = true;
    el.parentElement.classList.remove("form-field-error");
  } else {
    canSubmit = false;
    el.parentElement.classList.add("form-field-error");
  }
};

emailFld.addEventListener("keyup", function (evt) {
  evt.preventDefault();
  validateFld(this, evt.target.reportValidity());
});

passwordFld.addEventListener("keyup", function (evt) {
  evt.preventDefault();
  validateFld(this, passwordRegEx.test(evt.target.value));
});

repasswordFld.addEventListener("keyup", function (evt) {
  evt.preventDefault();
  validateFld(this, passwordFld.value === evt.target.value);
});

fullnameFld.addEventListener("keyup", function (evt) {
  evt.preventDefault();
  evt.target.value = evt.target.value.trimLeft();
  validateFld(this, evt.target.reportValidity());
});

formEl.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const getFormValues = [...evt.target.elements]
    .filter((el) => el.type !== "submit" && el)
    .map((el) => {
      return {
        name: el.getAttribute("name"),
        type: el.type,
        value: el.type === "checkbox" ? el.checked : el.value,
      };
    });

  const isFilled = getFormValues
    .filter((el) => el.type !== "checkbox")
    .every((el) => el.value !== "");
  return isFilled && canSubmit && submitForm(getFormValues);
});
