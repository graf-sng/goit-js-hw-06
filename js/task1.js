const list = document.querySelectorAll(".item");
const arr = [];

arr.push(`Number of categories: ${list.length}`);

[...list].forEach((element) =>
  arr.push(`
Category: ${element.children[0].textContent}
Elements: ${element.children[1].childElementCount}`)
);

const result = arr.join("\n");
console.log(result);
