function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');
const changeColor = () => {
  console.log(getRandomHexColor());
  const colore = getRandomHexColor();
  body.style.backgroundColor = colore;
  span.innerHTML = colore;
};
btn.addEventListener('click', changeColor);
