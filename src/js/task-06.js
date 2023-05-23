const input = document.querySelector('#validation-input');
const blurB = () => {
  const enteredValue = input.value;
  const requiredLength = input.dataset.length;

  if (enteredValue.length === Number(requiredLength)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else if (enteredValue.length === 0) {
    input.classList.remove('invalid');
    input.classList.remove('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
};
input.addEventListener('blur', blurB);
