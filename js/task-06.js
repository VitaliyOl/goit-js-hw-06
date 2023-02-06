const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onBlur);

function onBlur() {
  console.log(this.value.length);
  if (this.value.length === Number(inputRef.dataset.length)) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  } else {
    this.classList.add("invalid");
    this.classList.remove("valid");
  }
}
