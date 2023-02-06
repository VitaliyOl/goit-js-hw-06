const refs = {
  inputName: document.querySelector("#name-input"),
  outputName: document.querySelector("#name-output"),
};

refs.inputName.addEventListener("input", onInput);

function onInput(event) {
  refs.outputName.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : "Anonymous";
}
