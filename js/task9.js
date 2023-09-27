{
  /* <div class="widget">
  <p>
    Background color: <span class="color">-</span>
  </p>
  <button type="button" class="change-color">
    Change color
  </button>
</div>; */
}
const colorText = document.querySelector(".color");
const colorBtn = document.querySelector(".change-color");

text = colorBtn.addEventListener("click", chengeColor);

function chengeColor() {
  const color = getRandomHexColor();
  colorText.textContent = color;
  document.body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
