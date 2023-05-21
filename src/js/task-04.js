let counterValue = 0;
let counter = document.querySelector("#value");
counter.innerHTML = counterValue;
const up = () => {
  counterValue += 1;
  counter.innerHTML = counterValue;
  return;
};
const down = () => {
  counterValue -= 1;
  counter.innerHTML = counterValue;
  return;
};
const upBtn = document.querySelector("#increment");
const downBtn = document.querySelector("#decrement");
upBtn.addEventListener("click", up);
downBtn.addEventListener("click", down);
