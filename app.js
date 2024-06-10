const cardForm = document.querySelector(".card-form");
const holderName = document.querySelector("#holder-name");
const cardNumber = document.querySelector("#card-number");
const expDate = document.querySelector("#exp-date-label");
const cvc = document.querySelector("#cvc-number");
const submitButton = document.querySelector("#button");

const holderNameLine = document.querySelector(".holder-name-line");
const cardNumberLine = document.querySelector(".card-number-line");
const expDateLine = document.querySelector(".exp-date-line");
const cvcLine = document.querySelector(".cvc-line");

const submit = document.querySelector(".confirm");

const blankErrorMessage = "can't be blank";
const formatErrorMessage = "Wrong format";

submit.addEventListener("click", () => {
  // cardholder name
  let numericNumber = /^[0-9]+$/;
  let numericCharacter = /\d/;

  if (holderName.value === "") {
    showBlankErrMessage(holderName, holderNameLine);
    holderNameLine.innerText = blankErrorMessage;
  } else if (
    numericCharacter.test(holderName.value) ||
    numericNumber.test(holderName.value)
  ) {
    showBlankErrMessage(holderName, holderNameLine);
    holderNameLine.innerText = formatErrorMessage;
  }

  // cord number
  if (cardNumber.value === "") {
    showBlankErrMessage(cardNumber, cardNumberLine);
    cardNumberLine.innerText = blankErrorMessage;
  } else if (!numericNumber.test(cardNumber.value)) {
    showBlankErrMessage(cardNumber, cardNumberLine);
    cardNumberLine.innerText = formatErrorMessage;
  }

  // exp date
  // loop?
  if (expDate.value === "") {
    showBlankErrMessage(expDate, expDateLine);
    expDateLine.innerText = blankErrorMessage;
  } else if (!numericNumber.test(cardNumber.value)) {
    showBlankErrMessage(expDate, expDateLine);
    expDateLine.innerText = formatErrorMessage;
  }

  // cvc
  if (cvc.value === "") {
    showBlankErrMessage(cvc, cvcLine);
    cvcLine.innerText = blankErrorMessage;
  } else if (!numericNumber.test(cardNumber.value)) {
    showBlankErrMessage(cvc, cvcLine);
    cvcLine.innerText = formatErrorMessage;
  }
});

function showBlankErrMessage(info, line) {
  info.classList.add("error-form");
  line.classList.add("error-message");
  submitButton.disabled = true;
}
