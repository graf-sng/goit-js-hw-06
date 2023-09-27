const userInput = document.querySelector("#name-input");
const userText = document.querySelector("#name-output");

userInput.addEventListener("input", handleInput);

function handleInput(e) {
  let text = e.currentTarget.value;
  if (text === "") {
    userText.textContent = "Anonymous";
  } else {
    userText.textContent = text;
  }
}
