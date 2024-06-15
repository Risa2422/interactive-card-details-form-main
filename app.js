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
const containerInfo = document.querySelector(".container__info");
const success = document.querySelector(".success-message");
const hideDisplay = document.querySelector(".display-hide");
const continueButton = document.querySelector(".continue-button");
const input = document.querySelector("input");

const blankErrorMessage = "can't be blank";
const formatErrorMessage = "Wrong format";

cardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  reset();

  // cardholder name
  let numericNumber = /^[0-9]+$/;
  let numericCharacter = /\d/;
  let hasError = false;

  if (holderName.value === "") {
    showErrMessage(holderName, holderNameLine);
    holderNameLine.innerText = blankErrorMessage;
    hasError = true;
  } else if (
    numericNumber.test(holderName.value)
    // numericNumber.test(holderName.value)
  ) {
    showErrMessage(holderName, holderNameLine);
    holderNameLine.innerText = formatErrorMessage;
    hasError = true;
  }

  // card number
  if (cardNumber.value === "") {
    showErrMessage(cardNumber, cardNumberLine);
    cardNumberLine.innerText = blankErrorMessage;
    hasError = true;
  } else if (!numericNumber.test(cardNumber.value)) {
    showErrMessage(cardNumber, cardNumberLine);
    cardNumberLine.innerText = formatErrorMessage;
    hasError = true;
  }

  // exp date
  if (month.value == "") {
    showErrMessage(month, expDateLine);
    expDateLine.innerText = blankErrorMessage;
    hasError = true;
  }

  if (year.value == "") {
    showErrMessage(year, expDateLine);
    expDateLine.innerText = blankErrorMessage;
    hasError = true;
  }

  // cvc
  if (cvc.value === "") {
    showErrMessage(cvc, cvcLine);
    cvcLine.innerText = blankErrorMessage;
    hasError = true;
  } else if (!numericNumber.test(cardNumber.value)) {
    showErrMessage(cvc, cvcLine);
    console.log("hi");
    cvcLine.innerText = formatErrorMessage;
    hasError = true;
  }

  if (hasError) {
    return;
  }

  success.classList.remove("display-hide");
  containerInfo.classList.add("display-hide");
});

function showErrMessage(info, line) {
  info.classList.add("error-form");
  line.classList.add("error-message");
}

continueButton.addEventListener("click", () => {
  success.classList.add("display-hide");
  containerInfo.classList.remove("display-hide");
  cardForm.reset();
});

function reset() {
  holderName.classList.remove("error-form");
  holderNameLine.classList.remove("error-message");
  cardNumber.classList.remove("error-form");
  cardNumberLine.classList.remove("error-message");
  cvc.classList.remove("error-form");
  cvcLine.classList.remove("error-message");
  month.classList.remove("error-form");
  year.classList.remove("error-form");
  expDateLine.classList.remove("error-message");
  holderNameLine.innerText = "";
  cardNumberLine.innerText = "";
  expDateLine.innerText = "";
  cvcLine.innerText = "";
}

// Real-time functions
cardNumber.addEventListener("input", () => {
  let value = cardNumber.value.replace(/\s/g, ""); // Remove existing spaces
  let formattedValue = "";

  for (let i = 0; i < value.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += " ";
    }
    formattedValue += value[i];
  }

  document.querySelector(".card-number").innerText = formattedValue;
});

holderName.addEventListener("input", () => {
  document.querySelector(".card-name").innerText = holderName.value;
});

month.addEventListener("input", () => {
  document.querySelector(".card-month").innerText = month.value;
});

year.addEventListener("input", () => {
  document.querySelector(".card-year").innerText = year.value;
});

cvc.addEventListener("input", () => {
  document.querySelector(".card-cvc").innerText = cvc.value;
});
