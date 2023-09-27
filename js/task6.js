const inputUserText = document.querySelector("#validation-input");
const checkLength = document.querySelector("[data-length]");

inputUserText.addEventListener("blur", handleCheck);
inputUserText.addEventListener("focus", removeClass);

function handleCheck(evt) {
  const lengthUserText = evt.currentTarget.value.length;
  const lengthNeeded = parseInt(checkLength.dataset.length);

  lengthUserText === lengthNeeded
    ? inputUserText.classList.add("valid")
    : inputUserText.classList.add("invalid");
}

function removeClass() {
  inputUserText.classList.remove("valid");
  inputUserText.classList.remove("invalid");
}
