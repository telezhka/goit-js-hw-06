function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
const changeColor = () => {
  console.log(getRandomHexColor());
  body.style.backgroundColor = getRandomHexColor();
  span.innerHTML = getRandomHexColor();
};
btn.addEventListener("click", changeColor);
