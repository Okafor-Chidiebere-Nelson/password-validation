const password = document.querySelector("#password");
const smallLetterSpan = document.querySelector("#small-letter-span");
const capitalLetter = document.querySelector("#capital-letter");
const number = document.querySelector("#number");
const digitLength = document.querySelector("#digit-length");
const sectionContainer = document.querySelector(".section-container");
const submitButton = document.querySelector("#submit-button");
const checkbox = document.querySelector("#checkbox");

password.addEventListener("focus", () => {
  sectionContainer.style.display = "flex";
});

password.addEventListener("blur", () => {
  sectionContainer.style.display = "none";
});

password.addEventListener("keyup", () => {
  let smallLetterSpanRegEx = /[a-z]/g;
  if (password.value.match(smallLetterSpanRegEx)) {
    smallLetterSpan.classList.remove("invalid");
    smallLetterSpan.classList.add("valid");
  } else {
    smallLetterSpan.classList.remove("valid");
    smallLetterSpan.classList.add("invalid");
  }

  let capitalLetterRegEx = /[A-Z]/g;
  if (password.value.match(capitalLetterRegEx)) {
    capitalLetter.classList.remove("invalid");
    capitalLetter.classList.add("valid");
  } else {
    capitalLetter.classList.remove("valid");
    capitalLetter.classList.add("invalid");
  }

  let numberRegEx = /[0-9]/g;
  if (password.value.match(numberRegEx)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  if (password.value.length >= 8) {
    digitLength.classList.remove("invalid");
    digitLength.classList.add("valid");
  } else {
    digitLength.classList.remove("valid");
    digitLength.classList.add("invalid");
  }
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
});

checkbox.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
