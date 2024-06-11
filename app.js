const cardForm = document.querySelector(".card-form");
const holderName = document.querySelector("#holder-name");
const cardNumber = document.querySelector("#card-number");
const expDates = document.querySelectorAll("#exp-date-label");
const cvc = document.querySelector("#cvc-number");
const submitButton = document.querySelector("#button");

const month = document.querySelector(".month");
const year = document.querySelector(".year");

const holderNameLine = document.querySelector(".holder-name-line");
const cardNumberLine = document.querySelector(".card-number-line");
const expDateLine = document.querySelector(".exp-date-line");
const cvcLine = document.querySelector(".cvc-line");

const submit = document.querySelector("#confirm");

const blankErrorMessage = "can't be blank";
const formatErrorMessage = "Wrong format";

cardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // cardholder name
  let numericNumber = /^[0-9]+$/;
  let numericCharacter = /\d/;

  if (holderName.value === "") {
    showErrMessage(holderName, holderNameLine);
    holderNameLine.innerText = blankErrorMessage;
  } else if (
    numericCharacter.test(holderName.value) ||
    numericNumber.test(holderName.value)
  ) {
    showErrMessage(holderName, holderNameLine);
    holderNameLine.innerText = formatErrorMessage;
  }

  // card number
  if (cardNumber.value === "") {
    showErrMessage(cardNumber, cardNumberLine);
    cardNumberLine.innerText = blankErrorMessage;
  } else if (!numericNumber.test(cardNumber.value)) {
    showErrMessage(cardNumber, cardNumberLine);
    cardNumberLine.innerText = formatErrorMessage;
  }

  if (month.value == "") {
    showErrMessage(month, expDateLine);
    expDateLine.innerText = blankErrorMessage;
  }

  if (year.value == "") {
    showErrMessage(year, expDateLine);
    expDateLine.innerText = blankErrorMessage;
  }

  if (cvc.value === "") {
    // cvc
    showErrMessage(cvc, cvcLine);
    cvcLine.innerText = blankErrorMessage;
  } else if (!numericNumber.test(cardNumber.value)) {
    showErrMessage(cvc, cvcLine);
    cvcLine.innerText = formatErrorMessage;
  }
});

function showErrMessage(info, line) {
  info.classList.add("error-form");
  line.classList.add("error-message");
  submitButton.disabled = true;
}
