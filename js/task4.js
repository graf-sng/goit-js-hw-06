const value = document.querySelector("#value");
const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonIcn = document.querySelector('[data-action="increment"]');

let result = 0;

buttonIcn.addEventListener("click", icn);
buttonDec.addEventListener("click", dec);

function icn() {
  result += 1;
  value.textContent = result;
}

function dec() {
  result -= 1;
  value.textContent = result;
}
