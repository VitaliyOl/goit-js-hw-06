const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = this.elements.email.value;
  const password = this.elements.password.value;

  // const formData =
  //   !email || !password
  //     ? alert("всі поля повинні бути заповнені!")
  //     : { email, password };

  if (!email || !password) {
    return alert("всі поля повинні бути заповнені!");
  }
  const formData = { email, password };

  console.log(formData);

  this.reset();
}
