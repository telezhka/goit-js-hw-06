const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("ul#ingredients");
ingredients.forEach(function (ingredient) {
  const lastItem = document.createElement("li");
  lastItem.textContent = ingredient;
  list.append(lastItem);
});
