const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

range.addEventListener("input", changeFontSize);

function changeFontSize(evn) {
  fontSize = evn.currentTarget.value;
  text.style.fontSize = `${fontSize}px`;
}
