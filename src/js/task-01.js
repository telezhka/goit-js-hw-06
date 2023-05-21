const countArr = document.querySelectorAll(".item");
const count = countArr.length;
console.log(`Numbers of categories: ${count}`);
countArr.forEach(function (categ) {
  const headerCat = categ.querySelector("h2").textContent;
  const elements = categ.querySelectorAll("li").length;
  console.log(`Category: ${headerCat}`);
  console.log(`Elements: ${elements}`);
});
