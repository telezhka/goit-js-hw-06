const textContent = document.querySelector("#text");
const fonts = document.querySelector("#font-size-control");
const changer = () => {
  let fontSizeee = `${Number(fonts.value)}px`;
  return (textContent.style.fontSize = fontSizeee);
};
fonts.addEventListener("change", changer);
