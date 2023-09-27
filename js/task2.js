const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const markup = ingredients.map((val) => {
  const li = document.createElement("li");
  const p = document.createElement("p");

  p.classList.add("item");
  p.textContent = val;
  li.append(p);

  return li;
});

list.append(...markup);
