const loginForm = document.querySelector('form.login-form');
const loginInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const submitBtn = document.querySelector('.submit');
const subScript = event => {
  event.preventDefault();

  if (loginInput.value === '' || passwordInput.value === '') {
    return alert('Please fill in all the fields!');
  }
  let obj = {
    Login: loginInput.value,
    Password: passwordInput.value,
  };
  console.log(obj);
  event.currentTarget.reset();
};
loginForm.addEventListener('submit', subScript);
