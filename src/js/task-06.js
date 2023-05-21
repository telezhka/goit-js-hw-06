const check = document.querySelector("#validation-input");
const blurB = () => {
  let inputValue = check.value.length;
  //   console.log(Number(check.getAttribute("data-length")));
  //   console.log(inputValue);
  //   console.log(Number(check.getAttribute("data-length")) === inputValue);

  if (Number(check.getAttribute("data-length")) === inputValue) {
    check.classList.add("valid");

    return console.log(1);
  } else {
    check.classList.add("invalid");
    return console.log(1111111);
  }
};
check.addEventListener("blur", blurB);
