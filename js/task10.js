const input = document.querySelector("#controls input");
const create = document.querySelector("[data-create]");
const remove = document.querySelector("[data-destroy");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", createBlock);
remove.addEventListener("click", removeBlock);

function createBlock() {
  const amount = input.value;
  const boxCreate = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    boxCreate.push(
      `  <div style=" width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`
    );
    size += 10;
  }

  boxes.insertAdjacentHTML("beforeend", boxCreate.join(""));
}

function removeBlock() {
  boxes.innerHTML = "";
  input.value = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
