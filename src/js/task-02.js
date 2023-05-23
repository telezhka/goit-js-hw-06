const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('ul#ingredients');
const listt = [];
ingredients.forEach(function (ingredient) {
  // const lastItem = document.createElement("li");
  // lastItem.textContent = ingredient;

  let ing = `<li><p>${ingredient}</p></li>`;
  listt.push(ing);
  console.log(listt);
});
list.innerHTML = listt.join('');
